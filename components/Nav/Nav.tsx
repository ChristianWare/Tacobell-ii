"use client";

import styles from "./Nav.module.css";
import { useState, useEffect, FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import Person from "../../../public/icons/person.svg";
import Bell from "../../public/icons/bell.svg";

interface Props {
  color?: string;
  barColor?: string;
}

const Nav: FC<Props> = ({ color = "", barColor = "" }) => {

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
      text: "Menu",
      href: "/menu",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Blog",
      href: "/blog",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/' className={`${styles.logo} ${styles[color]}`}>
            Taco Bell{" "}
            <span className={styles.iconBox}>
              <Bell className={styles.icon} />
            </span>
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
                  ? `${styles.activeLink}  ${styles.navItem} ${styles[color]}`
                  : `${styles.navItem} ${styles[color]}`
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
                    ? `${styles.activeLink}  ${styles.navItem} ${styles[color]}`
                    : `${styles.navItem} ${styles[color]}`
                }
              >
                {navItem.text}
              </Link>
            </li>
          ))}

          <div className={styles.btnContainer}>
            <Button href='/order' text='We Cater !' btnType='navBtn' />
          </div>
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
          <span className={`${styles.whiteBar} ${styles[barColor]}`}></span>
          <span className={`${styles.whiteBar} ${styles[barColor]}`}></span>
          <span className={`${styles.whiteBar} ${styles[barColor]}`}></span>
        </span>
      </nav>
    </header>
  );
};
export default Nav;
