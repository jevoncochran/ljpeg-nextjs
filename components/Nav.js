import { useContext, useState } from "react";
import Link from "next/link";
import { SiteContext } from "../context/siteContext";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  const { atHome } = useContext(SiteContext);

  const [photoDDActive, setPhotoDDActive] = useState(false);

  const togglePhotoDD = () => {
    setPhotoDDActive(!photoDDActive);
  };

  return (
    <div
      className={styles["nav"]}
      style={{
        position: atHome ? "absolute" : "relative",
      }}
    >
      <div className={styles["nav-label-div"]}>
        <Link href="/">
          {/* this a tag needs to have this attribute: onClick={activateHome} */}
          <a className={styles["nav-label"]}>Home</a>
        </Link>
        <div className={styles["nav-dropdown-wrapper"]}>
          <p className={styles["nav-label"]} onClick={togglePhotoDD}>
            Photography
          </p>
          {photoDDActive && (
            <div className={styles["nav-dropdown-list"]}>
              <Link href="/portraits">
                <a className={styles["nav-dropdown-list-item"]}>Portraits</a>
              </Link>
              <Link href="/street">
                <a className={styles["nav-dropdown-list-item"]}>Street</a>
              </Link>
              <Link href="/travel">
                <a className={styles["nav-dropdown-list-item"]}>Travel</a>
              </Link>
              <Link href="/events">
                <a className={styles["nav-dropdown-list-item"]}>Events</a>
              </Link>
            </div>
          )}
        </div>
        <Link href="/about">
          <a className={styles["nav-label"]}>About</a>
        </Link>
        <Link href="/contact">
          <a className={styles["nav-label"]}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
