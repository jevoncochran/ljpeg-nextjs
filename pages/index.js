import { useEffect, useContext } from "react";
import ComingSoon from "../components/ComingSoon";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { SiteContext } from "../context/siteContext";

const Home = () => {
  const { activateHome } = useContext(SiteContext);

  useEffect(() => {
    activateHome();
  }, [activateHome]);

  return (
    <Layout>
      <div className={styles["home"]}>
        {/* <div
          className="home-img"
          style={{ backgroundImage: `url(${ljpegPlaceHolder})` }}
        ></div> */}
        <ComingSoon />
      </div>
    </Layout>
  );
};

export default Home;
