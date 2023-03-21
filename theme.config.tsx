import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Yafi Alhakim</span>,
  faviconGlyph: "💻",
  project: {
    link: "https://github.com/yaffalhakim1/blog-mdx-main",
  },
  docsRepositoryBase: "https://github.com/yaffalhakim1/blog-mdx-main",
  footer: {
    text: "Build with Next.js v13 appDir and Nextra by Yafi Alhakim",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Yafi Alhakim",
    };
  },
  primaryHue: 200,
};

export default config;
