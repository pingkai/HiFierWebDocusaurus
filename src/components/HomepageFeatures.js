import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: (
      <Translate id="homepage.features.hi-res.title">High-res Audio</Translate>
    ),
    Img: "https://s2.loli.net/2025/10/11/Ydx5sp8H3yobQR6.png",
    description: (
      <Translate id="homepage.features.hi-res.description">
        Enjoy lossless and Hi-res Audio playback. Passthough the DSD data to
        your DAC to enjoy High sample rate audio playback.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.playback.title">
        Online & Offline Playback,
      </Translate>
    ),
    Img: "https://s2.loli.net/2025/10/11/IkV2pO3Kd8WP9o6.png",
    description: (
      <Translate id="homepage.features.playback.description">
        Download your favorite tracks and listen offline anytime. Enjoy with no
        wait from commonly used cloud disks, media servers and file servers.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.caching.title">
        Caching Playback
      </Translate>
    ),
    Img: "https://s2.loli.net/2025/10/11/wU2DB7mECbrsdhp.png",
    description: (
      <Translate id="homepage.features.caching.description">
        Caching your tracks while listening to save your network cost when you
        play them again.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.artwork.title">
        Online Lyrics & Artwork image
      </Translate>
    ),
    Img: "https://s2.loli.net/2025/10/11/wtSVlLADu5N718a.png",
    description: (
      <Translate id="homepage.features.artwork.description">
        Display Online Lyric and Artwork image while listening.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.formats.title">
        Full Formats Support
      </Translate>
    ),
    Img: "https://s2.loli.net/2025/10/11/y5AULthIJNXKrOB.png",
    description: (
      <Translate id="homepage.features.formats.description">
        Support almost all audio formats and common video formats.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.playlist.title">
        Custom Playlists
      </Translate>
    ),
    Img: "https://s2.loli.net/2025/10/11/TdA8oeaXnYp4qUE.png",
    description: (
      <Translate id="homepage.features.playlist.description">
        Organize your music your way with customizable playlists.
      </Translate>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Img && (
          <img
            src={Img}
            className={styles.featureSvg}
            alt={title}
            style={{ width: "10rem", height: "auto" }}
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
