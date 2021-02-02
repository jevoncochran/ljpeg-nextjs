import { useEffect, useContext } from "react";
import MasonLayout from "../components/MasonLayout";
import { SiteContext } from "../context/siteContext";
import Layout from "../components/Layout";

const Street = () => {
  const { deactivateHome, chooseCollection, changeRootPath } = useContext(
    SiteContext
  );

  useEffect(() => {
    deactivateHome();
    chooseCollection("street");
    changeRootPath("/street");
  }, []);

  return (
    <Layout>
      <MasonLayout />
    </Layout>
  );
};

export default Street;
