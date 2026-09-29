import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("PWA, Mobile Responsiveness & Platform Optimization Verification", () => {
  // 1. PWA Manifest & Asset Integrity
  describe("PWA Manifest & Icon Verification", () => {
    it("has a valid public/manifest.json with Modus branding and standalone display", () => {
      const manifestPath = path.join(process.cwd(), "public", "manifest.json");
      expect(fs.existsSync(manifestPath)).toBe(true);

      const manifestContent = fs.readFileSync(manifestPath, "utf-8");
      const manifest = JSON.parse(manifestContent);

      expect(manifest.name).toBe("Modus Business Operating System");
      expect(manifest.short_name).toBe("Modus");
      expect(manifest.display).toBe("standalone");
      expect(manifest.start_url).toBe("/");
      expect(manifest.theme_color).toBe("#0284c7");
      expect(manifest.icons.length).toBeGreaterThanOrEqual(2);
    });

    it("verifies all PWA icon assets exist on disk and are non-empty", () => {
      const icon192 = path.join(process.cwd(), "public", "icons", "icon-192.png");
      const icon512 = path.join(process.cwd(), "public", "icons", "icon-512.png");
      const iconSvg = path.join(process.cwd(), "public", "icons", "icon.svg");
      const favicon = path.join(process.cwd(), "public", "favicon.ico");

      expect(fs.existsSync(icon192)).toBe(true);
      expect(fs.statSync(icon192).size).toBeGreaterThan(0);

      expect(fs.existsSync(icon512)).toBe(true);
      expect(fs.statSync(icon512).size).toBeGreaterThan(0);

      expect(fs.existsSync(iconSvg)).toBe(true);
      expect(fs.statSync(iconSvg).size).toBeGreaterThan(0);

      expect(fs.existsSync(favicon)).toBe(true);
      expect(fs.statSync(favicon).size).toBeGreaterThan(0);
    });

    it("has a valid service worker with offline fallback & cache strategies", () => {
      const swPath = path.join(process.cwd(), "public", "sw.js");
      expect(fs.existsSync(swPath)).toBe(true);

      const swContent = fs.readFileSync(swPath, "utf-8");
      expect(swContent).toContain("passport-cache-v1");
      expect(swContent).toContain("/offline.html");
      expect(swContent).toContain("BACKGROUND_SYNC_UPLOADS");
    });

    it("has an offline.html fallback page branded for Modus", () => {
      const offlinePath = path.join(process.cwd(), "public", "offline.html");
      expect(fs.existsSync(offlinePath)).toBe(true);

      const content = fs.readFileSync(offlinePath, "utf-8");
      expect(content).toContain("Modus Business OS");
      expect(content).toContain("You are currently offline");
    });
  });

  // 2. Viewport & Responsiveness Metadata Checks
  describe("Viewport & Mobile Meta Tag Checks", () => {
    it("app/layout.tsx defines responsive viewport settings with device-width and max-scale", () => {
      const layoutPath = path.join(process.cwd(), "app", "layout.tsx");
      const layoutContent = fs.readFileSync(layoutPath, "utf-8");

      expect(layoutContent).toContain("width: \"device-width\"");
      expect(layoutContent).toContain("initialScale: 1");
      expect(layoutContent).toContain("maximumScale: 5");
      expect(layoutContent).toContain("manifest: \"/manifest.json\"");
    });
  });

  // 3. Security Headers & Domain Extension Rules
  describe("Security Headers & Subdomain Verification", () => {
    it("middleware.ts sets strict security headers and detects Modus domain extensions", () => {
      const middlewarePath = path.join(process.cwd(), "middleware.ts");
      const middlewareContent = fs.readFileSync(middlewarePath, "utf-8");

      expect(middlewareContent).toContain("X-Frame-Options");
      expect(middlewareContent).toContain("X-Content-Type-Options");
      expect(middlewareContent).toContain("Referrer-Policy");
      expect(middlewareContent).toContain("Permissions-Policy");
      expect(middlewareContent).toContain("admin.modus.ng");
      expect(middlewareContent).toContain("partners.modus.ng");
      expect(middlewareContent).toContain("app.modus.ng");
    });
  });
});
