import cuba1 from "../../public/assets/images/places/cuba/cuba1.jpg";
import cuba2 from "../../public/assets/images/places/cuba/cuba2.jpg";
import cuba3 from "../../public/assets/images/places/cuba/cuba3.jpg";
import cuba4 from "../../public/assets/images/places/cuba/cuba4.jpg";
import cuba5 from "../../public/assets/images/places/cuba/cuba5.jpg";
import cuba6 from "../../public/assets/images/places/cuba/cuba6.jpg";
import cuba7 from "../../public/assets/images/places/cuba/cuba7.jpg";
import cuba8 from "../../public/assets/images/places/cuba/cuba8.jpg";
import cuba9 from "../../public/assets/images/places/cuba/cuba9.jpg";
import cuba10 from "../../public/assets/images/places/cuba/cuba10.jpg";
import cuba11 from "../../public/assets/images/places/cuba/cuba11.jpg";
import cuba12 from "../../public/assets/images/places/cuba/cuba12.jpg";
import cuba13 from "../../public/assets/images/places/cuba/cuba13.jpg";

const cuba = [
  { image: cuba1 },
  { image: cuba2 },
  { image: cuba3 },
  { image: cuba4 },
  { image: cuba5 },
  { image: cuba6 },
  { image: cuba7 },
  { image: cuba8 },
  { image: cuba9 },
  { image: cuba10 },
  { image: cuba11 },
  { image: cuba12 },
  { image: cuba13 },
];

cuba.forEach((pic, i) => {
  pic.id = i + 1;
});

export { cuba };
