import { z } from "zod";

// ---------------------------------------------------------------------------
// Shared validators
// ---------------------------------------------------------------------------

/** Matches YYYY-MM, e.g. "2024-03" */
const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, {
  message: 'Date must be in YYYY-MM format (e.g. "2024-03")',
});

/** Matches YYYY-MM or the literal string "Present" */
const yearMonthOrPresent = z.union([
  yearMonth,
  z.literal("Present"),
]);

/** Matches YYYY or YYYY-MM, e.g. "2020" or "2020-09" */
const yearOrYearMonth = z.string().regex(/^\d{4}(-(0[1-9]|1[0-2]))?$/, {
  message: 'Date must be in YYYY or YYYY-MM format (e.g. "2020" or "2020-09")',
});

// ---------------------------------------------------------------------------
// Profile
// (no body — profile.md body is unused in v1)
// ---------------------------------------------------------------------------
export const ProfileSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  githubUrl: z.string().url(),
  linkedinUrl: z.string().url(),
  contactLink: z.string(),          // may be https:// or mailto:
  contactLinkLabel: z.string(),
  email: z.string().email().optional(),
  profileImage: z.string().optional(),
  knowledgeExchangeNote: z.string(),
}).strict();

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const ProjectFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number().int(),
  technologies: z.array(z.string()),
  demoUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
}).strict();

export const ProjectSchema = ProjectFrontmatterSchema.extend({
  body: z.string().optional(),      // sanitized HTML, present if Markdown body exists
});

// ---------------------------------------------------------------------------
// Current Focus
// ---------------------------------------------------------------------------
export const FocusAreaFrontmatterSchema = z.object({
  title: z.string(),
  order: z.number().int(),
}).strict();

export const FocusAreaSchema = FocusAreaFrontmatterSchema.extend({
  body: z.string(),                 // sanitized HTML — required
});

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const SkillCategorySchema = z.object({
  label: z.string(),
  skills: z.array(z.string()),
}).strict();

export const SkillsFileSchema = z.object({
  categories: z.array(SkillCategorySchema),
}).strict();

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const CertificationSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  date: yearMonth,                  // must be YYYY-MM
  verificationUrl: z.string().url().optional(),
  badgeImage: z.string().optional(),
}).strict();

export const CertificationsFileSchema = z.object({
  certifications: z.array(CertificationSchema),
}).strict();

// ---------------------------------------------------------------------------
// Recommended Resources
// ---------------------------------------------------------------------------
export const ResourceItemSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  annotation: z.string().optional(),
}).strict();

export const ResourceGroupSchema = z.object({
  label: z.string(),
  resources: z.array(ResourceItemSchema),
}).strict();

export const ResourcesFileSchema = z.object({
  groups: z.array(ResourceGroupSchema),
}).strict();

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const ExperienceFrontmatterSchema = z.object({
  title: z.string(),
  organization: z.string(),
  startDate: yearMonth,             // must be YYYY-MM
  endDate: yearMonthOrPresent.optional(), // YYYY-MM, "Present", or absent
  order: z.number().int(),
}).strict();

export const ExperienceSchema = ExperienceFrontmatterSchema.extend({
  body: z.string(),                 // sanitized HTML — required
});

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const EducationFrontmatterSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  field: z.string(),
  startDate: yearOrYearMonth,       // YYYY or YYYY-MM
  endDate: yearOrYearMonth,         // YYYY or YYYY-MM — required, no "Present"
  order: z.number().int(),
}).strict();

export const EducationSchema = EducationFrontmatterSchema.extend({
  body: z.string().optional(),      // sanitized HTML, present if Markdown body exists
});

// ---------------------------------------------------------------------------
// About
// about.md has no required frontmatter. This schema represents the processed
// output returned by getAbout() after the Markdown body is rendered.
// ---------------------------------------------------------------------------
export const AboutSchema = z.object({
  body: z.string(),
});
