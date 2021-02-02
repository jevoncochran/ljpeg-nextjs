import portrait1 from "../public/assets/images/portraits/portrait1.jpg";
import portrait2 from "../public/assets/images/portraits/portrait2.jpg";
import portrait3 from "../public/assets/images/portraits/portrait3.jpg";
import portrait4 from "../public/assets/images/portraits/portrait4.jpg";
import portrait5 from "../public/assets/images/portraits/portrait5.jpg";
import portrait6 from "../public/assets/images/portraits/portrait6.jpg";
import portrait7 from "../public/assets/images/portraits/portrait7.jpg";
import portrait8 from "../public/assets/images/portraits/portrait8.jpg";
import portrait9 from "../public/assets/images/portraits/portrait9.jpg";
import portrait10 from "../public/assets/images/portraits/portrait1.jpg";
import portrait11 from "../public/assets/images/portraits/portrait11.jpg";
import portrait12 from "../public/assets/images/portraits/portrait12.jpg";
import portrait13 from "../public/assets/images/portraits/portrait13.jpg";
import portrait14 from "../public/assets/images/portraits/portrait14.jpg";
import portrait15 from "../public/assets/images/portraits/portrait15.jpg";
import portrait16 from "../public/assets/images/portraits/portrait16.jpg";
import portrait17 from "../public/assets/images/portraits/portrait17.jpg";
import portrait18 from "../public/assets/images/portraits/portrait18.jpg";

const portraits = [
  { image: portrait1 },
  { image: portrait2 },
  { image: portrait3 },
  { image: portrait4 },
  { image: portrait5 },
  { image: portrait6 },
  { image: portrait7 },
  { image: portrait8 },
  { image: portrait9 },
  { image: portrait10 },
  { image: portrait11 },
  { image: portrait12 },
  { image: portrait13 },
  { image: portrait14 },
  { image: portrait15 },
  { image: portrait16 },
  { image: portrait17 },
  { image: portrait18 },
];

portraits.forEach((portrait, i) => {
  portrait.id = i + 1;
});

export { portraits };
