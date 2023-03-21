import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Yafi Alhakim</span>,
  project: {
    link: "https://github.com/yaffalhakim1/blog-mdx",
  },

  docsRepositoryBase: "https://github.com/yaffalhakim1/blog-mdx",
  footer: {
    text: "Nextra Docs Template",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Yafi Alhakim",
    };
  },
};

export default config;
