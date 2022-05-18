import React from "react";
import styles from "../components/Navbar.module.css";
import ActiveLink from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
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
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (

    <nav className={styles.menu}>
      {menuItems.map(({text, href}) => (
        <ActiveLink text={text} href={href} key={href} />
      ))}
    </nav>
  );
};

export default Navbar;
