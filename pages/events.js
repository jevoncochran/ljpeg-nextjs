import { useEffect, useContext } from "react";
import Layout from "../components/Layout";
import GridLayout from "../components/GridLayout";
import { SiteContext } from "../context/siteContext";

const Events = () => {
  const { chooseCollection, deactivateHome, changeRootPath } = useContext(
    SiteContext
  );

  useEffect(() => {
    deactivateHome();
    chooseCollection("events");
    changeRootPath("/events");
  }, []);

  return (
    <Layout>
      <GridLayout />
    </Layout>
  );
};

export default Events;
