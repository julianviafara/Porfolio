import { describe, expect, it } from "vitest";
import { contact, projects, skillCategories } from "@/data/portfolio";

describe("portfolio content rules", () => {
  it("uses the exact contact details provided", () => {
    expect(contact.email).toBe("viafarajulian10@gmail.com");
    expect(contact.github).toBe("https://github.com/julianviafara");
    expect(contact.linkedin).toBe("https://www.linkedin.com/in/julian-andres-viafara-mosquera/");
  });

  it("only links projects to real URLs on the owner's GitHub or an https site", () => {
    for (const p of projects) {
      if (p.repoUrl) expect(p.repoUrl.startsWith("https://github.com/julianviafara/")).toBe(true);
      if (p.liveUrl) expect(p.liveUrl.startsWith("https://")).toBe(true);
    }
  });

  it("shows the five requested projects in order", () => {
    expect(projects.map((p) => p.title)).toEqual([
      "MealPlanner",
      "Pacifico Libre",
      "Mi Pequeña Bitácora",
      "Public Utility Management System",
      "Interactive Gastronomy Landing Page",
    ]);
  });

  it("does not invent details for Mi Pequeña Bitácora", () => {
    const b = projects.find((p) => p.id === "mi-pequena-bitacora")!;
    expect(b.summary).toBe("");
    expect(b.technologies).toEqual([]);
  });

  it("features the AI-assisted development category", () => {
    const ai = skillCategories.find((c) => c.featured);
    expect(ai?.items).toEqual(["OpenAI Codex", "Claude Code", "Lovable"]);
  });
});
