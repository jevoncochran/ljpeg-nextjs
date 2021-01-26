import ComingSoon from "../components/ComingSoon";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";

const Home = () => {
  // const { activateHome } = useContext(PageContext);

  // useEffect(() => {
  //   activateHome();
  // }, [activateHome]);

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
