import { useState, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { SiteContext } from "../context/siteContext";
import { travel } from "../data/places/travel";
import { events } from "../data/events/events";
import styles from "../styles/GridLayout.module.scss";
import Link from "next/link";

const GridLayout = () => {
  const { collection, chooseCollection } = useContext(SiteContext);

  const [imageArray, setImageArray] = useState("");
  const [linkHref, setLinkHref] = useState("");
  const [linkAs, setLinkAs] = useState("");

  useEffect(() => {
    switch (collection) {
      case "travel":
        setImageArray(travel);
        setLinkHref("/travel/[place]");
        setLinkAs("travel");
        break;
      case "events":
        setImageArray(events);
        setLinkHref("/events/[event]");
        setLinkAs("events");
        break;
      default:
        break;
    }
  }, [collection]);

  return (
    <Grid className={styles.gl} container spacing={2}>
      {imageArray !== "" &&
        imageArray.map((image) => (
          <Link href={linkHref} as={`${linkAs}/${image.directory}`}>
            <Grid
              key={image.title}
              className={styles["gl-img-div"]}
              item
              xs={4}
              onClick={() => chooseCollection(image.collection)}
            >
              <div
                className={styles["gl-img"]}
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundPosition: `${image.bg_position}`,
                }}
              ></div>
              <p className={styles["gl-collection"]}>{image.title}</p>
            </Grid>
          </Link>
        ))}
    </Grid>
  );
};

export default GridLayout;
