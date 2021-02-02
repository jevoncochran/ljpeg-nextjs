import styles from "../styles/Image.module.scss";

const Image = (props) => {
  return <img className={styles.image} src={props.image} alt={props.alt}></img>;
};

export default Image;
