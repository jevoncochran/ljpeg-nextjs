import { useState, useContext, useEffect } from "react";
import { SiteContext } from "../context/siteContext";
import { portraits } from "../data/portraits";
import { street } from "../data/street";
import { chicago } from "../data/places/chicago";
import { colombia } from "../data/places/colombia";
import { brazil } from "../data/places/brazil";
import { dr } from "../data/places/dr";
import { cuba } from "../data/places/cuba";
import { partyNoire } from "../data/events/partyNoire";
import { tdeXmas2018 } from "../data/events/tdeXmas2018";
import { dykeMarch2018 } from "../data/events/dykeMarch2018";
import styles from "../styles/BigImg.module.scss";
import { futureHood } from "../data/events/futureHood";
import Layout from "./Layout";
import Link from "next/link";

const BigImg = () => {
  const { collection, imageIndex } = useContext(SiteContext);
  const [thumbnailLinkHref, setThumbnailLinkHref] = useState("");
  const [thumbnailLinkAs, setThumbnailLinkAs] = useState("");
  const [sliderLinkHref, setSliderLinkHref] = useState("");
  const [sliderLinkAs, setSliderLinkAs] = useState("");

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

  useEffect(() => {
    console.log("actualIndex: ", actualIndex);
  }, [actualIndex]);

  useEffect(() => {
    switch (collection) {
      case "portraits":
        setImageArray(portraits);
        setThumbnailLinkHref("/portraits");
        setThumbnailLinkAs(null);
        setSliderLinkHref("/portraits/[imageId]");
        setSliderLinkAs("/portraits");
        break;
      case "street":
        setImageArray(street);
        setThumbnailLinkHref("/street");
        setThumbnailLinkAs(null);
        setSliderLinkHref("/street/[imageId]");
        setSliderLinkAs("/street");
        break;
      case "Chicago":
        setImageArray(chicago);
        setThumbnailLinkHref("/travel/[place]");
        setThumbnailLinkAs("/travel/chicago");
        setSliderLinkHref("/travel/[place]/[imageId]");
        setSliderLinkAs("/travel/chicago");
        break;
      case "Colombia":
        setImageArray(colombia);
        setThumbnailLinkHref("/travel/[place]");
        setThumbnailLinkAs("/travel/colombia");
        setSliderLinkHref("/travel/[place]/[imageId]");
        setSliderLinkAs("/travel/colombia");
        break;
      case "Brazil":
        setImageArray(brazil);
        setThumbnailLinkHref("/travel/[place]");
        setThumbnailLinkAs("/travel/brazil");
        setSliderLinkHref("/travel/[place]/[imageId]");
        setSliderLinkAs("/travel/brazil");
        break;
      case "Dominican-Republic":
        setImageArray(dr);
        setThumbnailLinkHref("/travel/[place]");
        setThumbnailLinkAs("/travel/dominican-republic");
        setSliderLinkHref("/travel/[place]/[imageId]");
        setSliderLinkAs("/travel/dominican-republic");
        break;
      case "Cuba":
        setImageArray(cuba);
        setThumbnailLinkHref("/travel/[place]");
        setThumbnailLinkAs("/travel/cuba");
        setSliderLinkHref("/travel/[place]/[imageId]");
        setSliderLinkAs("/travel/cuba");
        break;
      case "Party-Noire":
        setImageArray(partyNoire);
        setThumbnailLinkHref("/events/[event]");
        setThumbnailLinkAs("/events/party-noire");
        setSliderLinkHref("/events/[event]/[imageId]");
        setSliderLinkAs("/events/party-noire");
        break;
      case "TDE-Xmas":
        setImageArray(tdeXmas2018);
        setThumbnailLinkHref("/events/[event]");
        setThumbnailLinkAs("/events/tde-xmas-2018");
        setSliderLinkHref("/events/[event]/[imageId]");
        setSliderLinkAs("/events/tde-xmas-2018");
        break;
      case "Future-Hood":
        setImageArray(futureHood);
        setThumbnailLinkHref("/events/[event]");
        setThumbnailLinkAs("/events/future-hood");
        setSliderLinkHref("/events/[event]/[imageId]");
        setSliderLinkAs("/events/future-hood");
        break;
      case "Dyke-March-2018":
        setImageArray(dykeMarch2018);
        setThumbnailLinkHref("/events/[event]");
        setThumbnailLinkAs("/events/dyke-march-2018");
        setSliderLinkHref("/events/[event]/[imageId]");
        setSliderLinkAs("/events/dyke-march-2018");
      default:
        break;
    }
  }, [collection]);

  return (
    <Layout>
      <div className={styles["big-img"]}>
        <div className={styles["big-img-direction-div"]}>
          <Link
            href={sliderLinkHref}
            as={
              actualIndex > 0
                ? `${sliderLinkAs}/${actualIndex}`
                : `${sliderLinkAs}/${imageArray.length}`
            }
          >
            <div className={styles["big-img-button-text"]} onClick={getPrevPic}>
              Prev
            </div>
          </Link>
          <p className={styles["big-img-button-text"]}>/</p>
          <Link
            href={sliderLinkHref}
            as={
              actualIndex < imageArray.length - 1
                ? `${sliderLinkAs}/${actualIndex + 2}`
                : `${sliderLinkAs}/1`
            }
          >
            <div className={styles["big-img-button-text"]} onClick={getNextPic}>
              Next
            </div>
          </Link>
        </div>
        <Link href={thumbnailLinkHref} as={thumbnailLinkAs}>
          <div className={styles["big-img-thumbnail-div"]}>
            <p className={styles["big-img-button-text"]}>Show Thumbnails</p>
          </div>
        </Link>
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
