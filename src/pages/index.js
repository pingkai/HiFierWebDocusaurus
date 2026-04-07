import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { i18n } = useDocusaurusContext();

  const AppStoreBadge =
    i18n.currentLocale === "zh-Hans"
      ? "https://s2.loli.net/2025/10/11/hVNlg9kKWyzPuUr.png"
      : "https://s2.loli.net/2025/10/11/aB7XC952UAKkdSr.png";

  const AndroidAPKBadge =
    i18n.currentLocale === "zh-Hans"
      ? "https://files.seeusercontent.com/2026/04/07/Tmu0/GetItOnGooglePlay_Badge_Web_colo.png"
      : "https://files.seeusercontent.com/2026/04/07/6oNk/GetItOnGooglePlay_Badge_Web_colo.png";

  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "clamp(1rem, 5vw, 10rem)",
        paddingRight: "clamp(1rem, 5vw, 6rem)",
        backgroundColor: "#FAF3EB",
        flexWrap: "nowrap",
      }}
    >
      <div style={{ flex: 1, minWidth: "300px", maxWidth: "50%" }}>
        <h1
          className="hero__title"
          style={{
            color: "#33271F",
            textAlign: "left",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Feel the Beat
          <br /> Live the Moment
        </h1>
        <p
          className="hero__subtitle"
          style={{
            color: "#33271F",
            textAlign: "left",
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
            lineHeight: 1.5,
          }}
        >
          {siteConfig.tagline}
        </p>

        {/* 按钮容器：改为 Flex 布局并合并 */}
        <div
          className={styles.buttons}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            marginTop: "1.5rem",
          }}
        >
          <a
            href="https://apps.apple.com/app/id6740998246"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            <img
              src={AppStoreBadge}
              style={{ width: "10rem", height: "auto" }}
              alt="App Store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=top.mediacare.hifier"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            <img
              src={AndroidAPKBadge}
              style={{ width: "11rem", height: "auto" }}
              alt="Google Play"
            />
          </a>
        </div>
      </div>

      {/* 右侧图片 */}
      <div
        style={{ flex: 1, minWidth: 0, maxWidth: "50%", textAlign: "right" }}
      >
        <img
          src="https://files.seeusercontent.com/2026/04/07/0Uat/music_phone.png"
          srcSet="https://files.seeusercontent.com/2026/04/07/Jgo1/music_phone2x.png 2x, https://files.seeusercontent.com/2026/04/07/Qw4f/music_phone3x.png 3x"
          style={{ width: "100%", height: "auto", maxWidth: 500 }}
          alt="HiFier Preview"
        />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
