import { useContext } from "react";
import Link from "next/link";
import { SiteContext } from "../context/siteContext";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  const {
    atHome,
    // activateHome,
    // deactivateHome,
    // changeRootPath,
    // rootPath,
  } = useContext(SiteContext);

  // const goToPage = (path) => {
  //   changeRootPath(path);
  //   deactivateHome();
  // };

  return (
    <div
      className={styles["nav"]}
      style={{
        position: atHome ? "absolute" : "relative",
      }}
    >
      <div className={styles["nav-pages-div"]}>
        <Link href="/">
          {/* this a tag needs to have this attribute: onClick={activateHome} */}
          <a className={styles["nav-page"]}>Home</a>
        </Link>

        <Link href="/portraits">
          {/* all the a tags below need to have this attribute: onClick={deactivateHome} */}
          <a className={styles["nav-page"]}>Portraits</a>
        </Link>
        <Link href="/street">
          <a className={styles["nav-page"]}>Street</a>
        </Link>
        <Link href="/travel">
          <a className={styles["nav-page"]}>Travel</a>
        </Link>
        <Link href="/events">
          <a className={styles["nav-page"]}>Events</a>
        </Link>
        <Link href="/about">
          <a className={styles["nav-page"]}>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
