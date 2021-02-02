import { useEffect, useContext } from "react";
import Layout from "../components/Layout";
import GridLayout from "../components/GridLayout";
import { SiteContext } from "../context/siteContext";

const Travel = () => {
  const { chooseCollection, deactivateHome, changeRootPath } = useContext(
    SiteContext
  );

  useEffect(() => {
    deactivateHome();
    chooseCollection("travel");
    changeRootPath("/travel");
  }, []);

  return (
    <Layout>
      <GridLayout />
    </Layout>
  );
};

export default Travel;
