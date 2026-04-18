import projectsData from "@/data/projects.json";
import articlesData from "@/data/articles.json";
import { Project, Article } from "@/types";

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.id === id);
}

export function getArticles(): Article[] {
  return articlesData as Article[];
}

export function getFeaturedArticles(): Article[] {
  return (articlesData as Article[]).filter((a) => a.featured);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return (articlesData as Article[]).find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return (articlesData as Article[]).filter((a) => a.category === category);
}

export function getProjectsByCategory(category: string): Project[] {
  return (projectsData as Project[]).filter((p) => p.category === category);
}
