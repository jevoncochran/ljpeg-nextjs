import { useEffect, useContext } from "react";
import MasonLayout from "../../components/MasonLayout";
import { SiteContext } from "../../context/siteContext";
import Layout from "../../components/Layout";

const Place = () => {
  const { chooseCollection, deactivateHome, changeRootPath } = useContext(
    SiteContext
  );

  useEffect(() => {
    deactivateHome();
  }, []);

  return (
    <Layout>
      <MasonLayout></MasonLayout>
    </Layout>
  );
};

export default Place;
