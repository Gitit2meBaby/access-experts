import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import remoteSupport from "../../../public/meetDesk600x450.webp";

const PageSegment4 = () => {
  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "2rem" }}>Upgrades and Migration</h2>
            <p>
              The extensive experience of our team of Access database experts is
              available to ensure your upgrades and migrations go smoothly, by
              mitigating the risk of compatibility, reliability and corruption
              issues and saving you the associated stress and frustrations of
              troubleshooting and disaster recovery.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={remoteSupport}
              alt="person clicking a computer mouse"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
