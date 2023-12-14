"use client";

import React, { useState, useEffect } from "react";
import styles from "./ScrollIndicator.module.css";

function ScrollIndicator() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className={styles.progressWrapper}>
        <div
          className={styles.progressMainStyle}
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
