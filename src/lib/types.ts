import type { z } from "zod";
import type {
  ProfileSchema,
  ProjectSchema,
  FocusAreaSchema,
  SkillCategorySchema,
  SkillsFileSchema,
  CertificationSchema,
  CertificationsFileSchema,
  ResourceItemSchema,
  ResourceGroupSchema,
  ResourcesFileSchema,
  ExperienceSchema,
  EducationSchema,
  AboutSchema,
} from "./schemas";

// ---------------------------------------------------------------------------
// All types are derived exclusively from the final Zod schemas.
// No manual interfaces. The schemas are the single source of truth.
// ---------------------------------------------------------------------------

export type Profile            = z.infer<typeof ProfileSchema>;
export type Project            = z.infer<typeof ProjectSchema>;
export type FocusArea          = z.infer<typeof FocusAreaSchema>;
export type SkillCategory      = z.infer<typeof SkillCategorySchema>;
export type SkillsData         = z.infer<typeof SkillsFileSchema>;
export type Certification      = z.infer<typeof CertificationSchema>;
export type CertificationsData = z.infer<typeof CertificationsFileSchema>;
export type ResourceItem       = z.infer<typeof ResourceItemSchema>;
export type ResourceGroup      = z.infer<typeof ResourceGroupSchema>;
export type ResourcesData      = z.infer<typeof ResourcesFileSchema>;
export type ExperienceEntry    = z.infer<typeof ExperienceSchema>;
export type EducationEntry     = z.infer<typeof EducationSchema>;
export type AboutData          = z.infer<typeof AboutSchema>;
