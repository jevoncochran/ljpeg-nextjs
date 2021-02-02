import { useState, useContext, useEffect } from "react";
import styles from "../styles/MasonLayout.module.scss";
import Image from "./Image";
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
import { futureHood } from "../data/events/futureHood";
import { dykeMarch2018 } from "../data/events/dykeMarch2018";
import Link from "next/link";

const MasonLayout = (props) => {
  const { collection, rootPath, chooseImgIdx, imageIndex } = useContext(
    SiteContext
  );

  const [imageArray, setImageArray] = useState("");
  const [linkHref, setLinkHref] = useState("");
  const [linkAs, setLinkAs] = useState("");

  useEffect(() => {
    switch (collection) {
      case "portraits":
        setImageArray(portraits);
        setLinkHref("/portraits/[id]");
        setLinkAs("portraits");
        break;
      case "street":
        setImageArray(street);
        setLinkHref("/street/[id]");
        setLinkAs("street");
        break;
      case "Chicago":
        setImageArray(chicago);
        setLinkHref("/travel/[place]/[imageId]");
        setLinkAs("/travel/chicago");
        break;
      case "Colombia":
        setImageArray(colombia);
        setLinkHref("/travel/[place]/[imageId]");
        setLinkAs("/travel/colombia");
        break;
      case "Brazil":
        setImageArray(brazil);
        setLinkHref("/travel/[place]/[imageId]");
        setLinkAs("/travel/brazil");
        break;
      case "Dominican-Republic":
        setImageArray(dr);
        setLinkHref("/travel/[place]/[imageId]");
        setLinkAs("/travel/dominican-republic");
        break;
      case "Cuba":
        setImageArray(cuba);
        setLinkHref("/travel/[place]/[imageId]");
        setLinkAs("/travel/cuba");
        break;
      case "Party-Noire":
        setImageArray(partyNoire);
        setLinkHref("/events/[event]/[imageId]");
        setLinkAs("/events/party-noire");
        break;
      case "TDE-Xmas":
        setImageArray(tdeXmas2018);
        setLinkHref("/events/[event]/[imageId]");
        setLinkAs("/events/tde-xmas-2018");
        break;
      case "Future-Hood":
        setImageArray(futureHood);
        setLinkHref("/events/[event]/[imageId]");
        setLinkAs("/events/future-hood");
        break;
      case "Dyke-March-2018":
        setImageArray(dykeMarch2018);
        setLinkHref("/events/[event]/[imageId]");
        setLinkAs("/events/dyke-march-2018");
        break;
      default:
        break;
    }
  }, [collection]);

  console.log("collection: ", collection);
  console.log("image array: ", imageArray);

  useEffect(() => {
    console.log("image index: ", imageIndex);
  }, [imageIndex]);

  return (
    <div className={styles.ml}>
      {imageArray !== "" &&
        imageArray.map((item) => (
          <Link href={linkHref} as={`${linkAs}/${item.id}`}>
            <div onClick={() => chooseImgIdx(item.id)}>
              <Image
                key={item.id}
                image={item.image}
                alt={item.alt}
                id={item.id}
              />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MasonLayout;
