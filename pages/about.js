import { useEffect, useContext } from "react";
import { SiteContext } from "../context/siteContext";
import Layout from "../components/Layout";
import styles from "../styles/About.module.scss";
import lAboutPic from "../public/assets/images/about/l-about-pic.jpg";

const About = () => {
  const { deactivateHome } = useContext(SiteContext);

  useEffect(() => {
    deactivateHome();
  }, []);

  return (
    <Layout>
      <div className={styles.about}>
        <div
          className={styles["about-img"]}
          style={{ backgroundImage: `url(${lAboutPic})` }}
        ></div>
        <div className={styles["about-text-div"]}>
          <p className={styles["about-text-first-line"]}>Peace World,</p>
          <p className={styles["about-text"]}>
            My name is La Tasha Ja’Nay Pollard, but please, call me L.
            Originally from Compton, California, i am currently based in
            Chicago, Illinois.
          </p>
          <p className={styles["about-text"]}>
            Photography is my way of connecting with the new places i find
            myself. I focus my eye on the things that bring me a sense of
            connection and joy: Black people and our culture, my family, and
            travelling, to name a few. I capture fleeting moments of energy,
            movement, brilliance, joy.
          </p>
          <p className={styles["about-text"]}>
            If you enjoy my work please follow my journey on instagram @ _l.jpeg
            and other socials linked below…. Just keep in mind that ima artist,
            and i’m sensitive about my shit!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
