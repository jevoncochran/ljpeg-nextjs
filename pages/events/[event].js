import { useEffect, useContext } from "react";
import MasonLayout from "../../components/MasonLayout";
import { SiteContext } from "../../context/siteContext";
import Layout from "../../components/Layout";

const Event = () => {
  const { deactivateHome } = useContext(SiteContext);

  useEffect(() => {
    deactivateHome();
  }, []);

  return (
    <Layout>
      <MasonLayout></MasonLayout>
    </Layout>
  );
};

export default Event;
