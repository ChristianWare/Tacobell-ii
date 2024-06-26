"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingCartModal from "../ShoppingCartModal/ShoppingCartModal";

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
      text: "About",
      href: "/about",
    },
    {
      text: "Menu",
      href: "/menu",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/' className={styles.logo}>
            Taco Bell
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
        >
          <li>
            <Link
              href='/'
              className={
                pathname === "/"
                  ? `${styles.activeLink}  ${styles.navItem}`
                  : styles.navItem
              }
            >
              Home
            </Link>
          </li>
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={styles.navItem}
              onClick={() => setIsOpen(false)}
            >
              <Link
                href={navItem.href}
                className={
                  pathname.includes(navItem.href)
                    ? `${styles.activeLink}  ${styles.navItem}`
                    : styles.navItem
                }
              >
                {navItem.text}
              </Link>
            </li>
          ))}
          {/* <ShoppingCartModal /> */}
        </ul>
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
