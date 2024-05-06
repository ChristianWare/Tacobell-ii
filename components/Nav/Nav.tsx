"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Taco from "../../public/icons/taco.svg";
import Insta from "../../public/icons/instagram.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Facebook from "../../public/icons/facebook.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 870 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const pathname = usePathname();

  const navItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Menu",
      href: "#menu",
    },
    {
      text: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/' className={styles.logoMobile}>
          <Taco className={styles.iconii} width={80} height={80} />
          Taco Bell{" "}
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
        >
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={styles.navItem}
              onClick={() => setIsOpen(false)}
            >
              <Link
                href={navItem.href}
                className={
                  pathname === navItem.href
                    ? `${styles.activeLink}  ${styles.navItem}`
                    : styles.navItem
                }
              >
                {navItem.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link href='/' className={styles.logo}>
          <Taco className={styles.icon} width={60} height={60} />
          Taco Bell
        </Link>
        <div className={styles.leftBottom}>
          <Link
            href='https://www.linkedin.com/'
            target='_blank'
            aria-label='LinkedIn'
            className={styles.detail}
          >
            <LinkedIn className={styles.icon} width={12} height={12} />
          </Link>
          <Link
            href='https://www.facebook.com/'
            target='_blank'
            aria-label='Facebook'
            className={styles.detail}
          >
            <Facebook className={styles.icon} width={12} height={12} />
          </Link>
          <Link
            href='https://instagram.com/'
            target='_blank'
            aria-label='Instagram'
            className={styles.detail}
          >
            <Insta className={styles.icon} width={12} height={12} />
          </Link>
        </div>
        {isOpen && (
          <div
            className={`${styles.overlay} ${
              isOverlayVisible ? styles.visible : ""
            }`}
            onClick={() => {
              setIsOpen(false);
              setIsOverlayVisible(false);
            }}
          ></div>
        )}
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : `${styles.hamburger} ${styles.active}`
          }
          onClick={openMenu}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </span>
      </nav>
    </header>
  );
}
export default Nav;
