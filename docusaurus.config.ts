import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Sanghyeon Kim's Blog",
  favicon: "img/favicon.ico",

  url: "https://sanghyeon.dev",
  baseUrl: "/",
  projectName: "blog",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          postsPerPage: "ALL",
          routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: 'G-DRBWF62HVQ',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Sanghyeon Kim's Blog",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/boh001",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/in/sanghyeon-kim-3704bb224/",
          label: "LinkedIn",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Sanghyeon Kim.`,
    },
    /* announcementBar: {
      id: "support_us",
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: false,
    }, */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
