export default interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveDemo: string;
  github: string;
  featured?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
  color?: string;
}

export interface Skill {
  name: string;
  level?: number;
  category?: "frontend" | "backend" | "database" | "tools" | "other";
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

export interface FormStatus {
  type: "success" | "error" | "loading" | "";
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
  avatar?: string;
  resume?: string;
}

// Props interfaces for components
export interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

export interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface ContactFormProps {
  onSubmit: (formData: ContactForm) => Promise<void>;
}

export interface SkillTagProps {
  skill: string | Skill;
  index?: number;
}

export interface SocialLinkProps {
  link: SocialLink;
}

// Animation and utility types
export interface AnimationOptions {
  delay?: number;
  duration?: number;
  easing?: string;
}

export interface ScrollOptions {
  behavior?: "smooth" | "auto";
  block?: "start" | "center" | "end" | "nearest";
}

// API Response types (for future backend integration)
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface ContactSubmissionResponse {
  id: string;
  timestamp: string;
  status: "sent" | "pending" | "failed";
}

// Theme and styling types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

export interface BreakpointConfig {
  mobile: number;
  tablet: number;
  desktop: number;
  wide: number;
}

// Error handling types
export interface AppError {
  code: string;
  message: string;
  details?: unknown; // or use Record<string, unknown> if it's always an object
}
