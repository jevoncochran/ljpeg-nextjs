import { useState, useContext, useEffect } from "react";
import { SiteContext } from "../context/siteContext";
import { portraits } from "../data/portraits";
import { street } from "../data/street";
import { chicago } from "../data/places/chicago";
import { colombia } from "../data/places/colombia";
import { brazil } from "../data/places/brazil";
import { dr } from "../data/places/dr";
import { partyNoire } from "../data/events/partyNoire";
import { tdeXmas2018 } from "../data/events/tdeXmas2018";
import { dykeMarch2018 } from "../data/events/dykeMarch2018";
import styles from "../styles/BigImg.module.scss";
import { futureHood } from "../data/events/futureHood";
import Layout from "./Layout";

const BigImg = (props) => {
  const { collection, imageIndex, rootPath } = useContext(SiteContext);
  const [imageArray, setImageArray] = useState("");
  const [actualIndex, setActualIndex] = useState(imageIndex);

  const getNextPic = () => {
    if (actualIndex === imageArray.length - 1) {
      setActualIndex(0);
    } else {
      setActualIndex(actualIndex + 1);
    }
  };

  const getPrevPic = () => {
    if (actualIndex === 0) {
      setActualIndex(imageArray.length - 1);
    } else {
      setActualIndex(actualIndex - 1);
    }
  };

  // may need to change this because the directory property better reflects the dynamic variable here
  const showThumbnails = () => {
    if (rootPath === "/places" || rootPath === "/events") {
      props.history.push(`${rootPath}/${collection.toLowerCase()}`);
    } else {
      props.history.push(`/${collection.toLowerCase()}`);
    }
  };

  useEffect(() => {
    switch (collection) {
      case "portraits":
        setImageArray(portraits);
        break;
      case "street":
        setImageArray(street);
        break;
      case "Chicago":
        setImageArray(chicago);
        break;
      case "Colombia":
        setImageArray(colombia);
        break;
      case "Brazil":
        setImageArray(brazil);
        break;
      case "Dominican-Republic":
        setImageArray(dr);
        break;
      case "Party-Noire":
        setImageArray(partyNoire);
        break;
      case "TDE-Xmas":
        setImageArray(tdeXmas2018);
        break;
      case "Future-Hood":
        setImageArray(futureHood);
        break;
      case "Dyke-March-2018":
        setImageArray(dykeMarch2018);
      default:
        break;
    }
  }, [collection]);

  return (
    <Layout>
      <div className={styles["big-img"]}>
        <div className={styles["big-img-direction-div"]}>
          <p className={styles["big-img-button-text"]} onClick={getPrevPic}>
            Prev
          </p>
          <p className={styles["big-img-button-text"]}>/</p>
          <p className={styles["big-img-button-text"]} onClick={getNextPic}>
            Next
          </p>
        </div>
        <div className={styles["big-img-thumbnail-div"]}>
          <p className={styles["big-img-button-text"]} onClick={showThumbnails}>
            Show Thumbnails
          </p>
        </div>
        <div className={styles["big-img-img-container"]}>
          {imageArray !== "" && (
            <img
              className={styles["big-img-img"]}
              src={imageArray[actualIndex].image}
              alt={imageArray[actualIndex].alt}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BigImg;
