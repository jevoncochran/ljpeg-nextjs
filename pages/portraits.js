import { useEffect, useContext } from "react";
import MasonLayout from "../components/MasonLayout";
import { SiteContext } from "../context/siteContext";
import Layout from "../components/Layout";

const Portraits = (props) => {
  const {
    chooseCollection,
    deactivateHome,
    chooseImgIdx,
    changeRootPath,
    rootPath,
  } = useContext(SiteContext);

  useEffect(() => {
    deactivateHome();
    chooseCollection("portraits");
    changeRootPath("/portaits");
  }, []);

  //   const renderImage = (id) => {
  //     chooseImgIdx(id);
  //     props.history.push(`${rootPath}/${id}`);
  //   };

  return (
    <Layout>
      <MasonLayout />
    </Layout>
  );
};

export default Portraits;
