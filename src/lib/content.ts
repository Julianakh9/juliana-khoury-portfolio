import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

import {
  ProfileSchema,
  ProjectFrontmatterSchema,
  ProjectSchema,
  FocusAreaFrontmatterSchema,
  FocusAreaSchema,
  SkillsFileSchema,
  CertificationsFileSchema,
  ResourcesFileSchema,
  AboutSchema,
  ExperienceFrontmatterSchema,
  ExperienceSchema,
  EducationFrontmatterSchema,
  EducationSchema,
} from "./schemas";

import type {
  Profile,
  Project,
  FocusArea,
  SkillsData,
  CertificationsData,
  ResourcesData,
  AboutData,
  ExperienceEntry,
  EducationEntry,
} from "./types";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const CONTENT_DIR = path.join(process.cwd(), "content");

function contentPath(...segments: string[]): string {
  return path.join(CONTENT_DIR, ...segments);
}

// ---------------------------------------------------------------------------
// Markdown pipeline
// Processes a Markdown string through:
//   remark → remark-rehype → rehype-sanitize → rehype-stringify
// Returns a sanitized HTML string safe for dangerouslySetInnerHTML.
// ---------------------------------------------------------------------------

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);
  return String(result);
}

// ---------------------------------------------------------------------------
// Helper: read all .md files from a directory, sorted by filename
// ---------------------------------------------------------------------------

function readMarkdownFiles(
  dir: string
): Array<{ filename: string; content: string }> {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((filename) => ({
      filename,
      content: fs.readFileSync(path.join(dir, filename), "utf-8"),
    }));
}

// ---------------------------------------------------------------------------
// Loaders
// ---------------------------------------------------------------------------

export function getProfile(): Profile {
  const raw = fs.readFileSync(contentPath("profile.md"), "utf-8");
  const { data } = matter(raw);
  return ProfileSchema.parse(data);
}

export async function getProjects(): Promise<Project[]> {
  const files = readMarkdownFiles(contentPath("projects"));
  const projects = await Promise.all(
    files.map(async ({ content }) => {
      const { data, content: body } = matter(content);
      const frontmatter = ProjectFrontmatterSchema.parse(data);
      const renderedBody = body.trim()
        ? await markdownToHtml(body)
        : undefined;
      return ProjectSchema.parse({ ...frontmatter, body: renderedBody });
    })
  );
  return projects.sort((a, b) => a.order - b.order);
}

export async function getFocusAreas(): Promise<FocusArea[]> {
  const files = readMarkdownFiles(contentPath("focus"));
  const areas = await Promise.all(
    files.map(async ({ filename, content }) => {
      const { data, content: body } = matter(content);
      const frontmatter = FocusAreaFrontmatterSchema.parse(data);
      if (!body.trim()) {
        throw new Error(
          `content/focus/${filename}: body is required for Current Focus entries but the file has no Markdown content.`
        );
      }
      const renderedBody = await markdownToHtml(body);
      return FocusAreaSchema.parse({ ...frontmatter, body: renderedBody });
    })
  );
  return areas.sort((a, b) => a.order - b.order);
}

export function getSkills(): SkillsData {
  const raw = fs.readFileSync(contentPath("skills.md"), "utf-8");
  const { data } = matter(raw);
  return SkillsFileSchema.parse(data);
}

export function getCertifications(): CertificationsData {
  const raw = fs.readFileSync(contentPath("certifications.md"), "utf-8");
  const { data } = matter(raw);
  return CertificationsFileSchema.parse(data);
}

export function getResources(): ResourcesData {
  const raw = fs.readFileSync(contentPath("resources.md"), "utf-8");
  const { data } = matter(raw);
  return ResourcesFileSchema.parse(data);
}

export async function getAbout(): Promise<AboutData> {
  const raw = fs.readFileSync(contentPath("about.md"), "utf-8");
  const { content: body } = matter(raw);
  const renderedBody = await markdownToHtml(body);
  return AboutSchema.parse({ body: renderedBody });
}

export async function getExperience(): Promise<ExperienceEntry[]> {
  const files = readMarkdownFiles(contentPath("experience"));
  const entries = await Promise.all(
    files.map(async ({ filename, content }) => {
      const { data, content: body } = matter(content);
      const frontmatter = ExperienceFrontmatterSchema.parse(data);
      if (!body.trim()) {
        throw new Error(
          `content/experience/${filename}: body is required for Experience entries but the file has no Markdown content.`
        );
      }
      const renderedBody = await markdownToHtml(body);
      return ExperienceSchema.parse({ ...frontmatter, body: renderedBody });
    })
  );
  return entries.sort((a, b) => a.order - b.order);
}

export async function getEducation(): Promise<EducationEntry[]> {
  const files = readMarkdownFiles(contentPath("education"));
  const entries = await Promise.all(
    files.map(async ({ content }) => {
      const { data, content: body } = matter(content);
      const frontmatter = EducationFrontmatterSchema.parse(data);
      const renderedBody = body.trim()
        ? await markdownToHtml(body)
        : undefined;
      return EducationSchema.parse({ ...frontmatter, body: renderedBody });
    })
  );
  return entries.sort((a, b) => a.order - b.order);
}
