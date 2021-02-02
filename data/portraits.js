import jevonOnBeach from "../public/assets/images/portraits/jevon-praia-do-forte.jpg";
import maskedCrip from "../public/assets/images/portraits/masked-crip.jpg";
import huey from "../public/assets/images/portraits/huey.jpg";
import kamryn from "../public/assets/images/portraits/kamryn.jpg";
import malik from "../public/assets/images/portraits/malik.jpg";
import pregnant_chick from "../public/assets/images/portraits/pregnant-chick.jpg";
import bald_rihanna from "../public/assets/images/portraits/bald-rihanna.jpg";
import beach_boy from "../public/assets/images/portraits/beach-boy.jpg";

const portraits = [
  { image: jevonOnBeach },
  { image: maskedCrip },
  { image: huey },
  { image: beach_boy },
  { image: kamryn },
  { image: malik },
  { image: pregnant_chick },
  { image: bald_rihanna },
];

portraits.forEach((portrait, i) => {
  portrait.id = i + 1;
});

export { portraits };
