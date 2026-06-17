import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "HiFier, HiFi Music Player",
    tagline:
      "Experience the ultimate music player with high-quality audio and seamless playback.",
    url: "https://hifier.mediacare.top",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "https://s2.loli.net/2025/01/17/LISQt2T7lwN9ZRb.png",
    organizationName: "pingkai", // Usually your GitHub org/user name.
    projectName: "HiFierWebDocusaurus", // Usually your repo name.

    i18n: {
      defaultLocale: "en",
      locales: ["en", "zh-Hans"],
      localeConfigs: {
        "zh-Hans": {
          label: "简体中文",
        },
      },
    },

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: ({ locale, docPath }) => {
              if (locale === "zh-Hans") {
                // Link to a Crowdin project for French translations, for example
                return `https://github.com/pingkai/HiFierWebDocusaurus/edit/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/${docPath}`;
              }
              // Default to GitHub for other locales
              return `https://github.com/pingkai/HiFierWebDocusaurus/edit/main/docs/${docPath}`;
            },
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/pingkai/HiFierWebDocusaurus/blob/main/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Hifier Music Player",
          logo: {
            alt: "My Site Logo",
            src: "https://s2.loli.net/2025/01/17/LISQt2T7lwN9ZRb.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Tutorial",
            },
            // { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://github.com/pingkai/HiFierWebDocusaurus",
              label: "GitHub",
              position: "right",
            },
            {
              type: "localeDropdown",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            // {
            //   title: "Docs",
            //   items: [
            //     {
            //       label: "Tutorial",
            //       to: "/docs/intro",
            //     },
            //   ],
            // },
            // {
            //   title: "Community",
            //   items: [
            //     {
            //       label: "Stack Overflow",
            //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //     },
            //     {
            //       label: "Discord",
            //       href: "https://discordapp.com/invite/docusaurus",
            //     },
            //     {
            //       label: "Twitter",
            //       href: "https://twitter.com/docusaurus",
            //     },
            //   ],
            // },
            // {
            //   title: "More",
            //   items: [
            //     {
            //       label: "Blog",
            //       to: "/blog",
            //     },
            //     {
            //       label: "GitHub",
            //       href: "https://github.com/facebook/docusaurus",
            //     },
            //   ],
            // },

            {
              title: " ",
              items: [
                {
                  label: "Privacy Policy",
                  to: "/privacy_policy",
                },
                {
                  label: "AFDIAN Sponsoring",
                  href: "https://afdian.com/a/hifier",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} MediaCare.top. All rights reserved.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
