import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "High-Quality Audio",
    Img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Hi-Res_Audio_%28logo%29.svg/250px-Hi-Res_Audio_%28logo%29.svg.png",
    description: <>Enjoy lossless and Hi-res Audio playback.</>,
  },
  {
    title: "DSD audio over pcm (DoP)",
    Img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/DSDlogo.svg",
    description: (
      <>
        Passthough the DSD data to your DAC to enjoy High sample rate audio
        playback.
      </>
    ),
  },
  {
    title: "Caching Playback",
    Img: "https://www.elliotclyde.nz/images/blog/blog-14.svg",
    description: (
      <>
        Caching your tracks while listening to save your network cost when you
        play them again.
      </>
    ),
  },
  {
    title: "Offline Playback",
    Img: "https://icons.veryicon.com/png/o/internet--web/truckhome/offline-5.png",
    description: <>Download your favorite tracks and listen offline anytime.</>,
  },
  {
    title: "Online Lyrics and Artwork image",
    Img: "https://cdn.photo-to-text.com/wp-content/uploads/Marriage-Photo-Gift-Landing.jpg",
    description: <>Display Online Lyric and Artwork image while listening.</>,
  },
  {
    title: "Online Playback",
    Img: "https://cdn0.iconfinder.com/data/icons/web-development-17/64/play_youtube_tube_browser_online_web-512.png",
    description: (
      <>
        Listen to your favorite songs with no wait from Samba, Google Drive,
        Dropbox, 阿里云盘 and OneDrive.
      </>
    ),
  },
  {
    title: "Full Formats Supporting",
    Img: "https://samplerateconverter.com/pictures/compressed-uncompressed-lossless-lossy-formats-m.png",
    description: (
      <>Support almost all audio formats and common video formats.</>
    ),
  },
  {
    title: "Custom Playlists",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPC8BIp2VI2EptaeocOobAB3cVooZGrKSW11uqKezODIwtHAeCCc46CH4w2UJJjD1XRY&usqp=CAU",
    description: <>Organize your music your way with customizable playlists.</>,
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Img && <img src={Img} className={styles.featureSvg} alt={title} />}
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
