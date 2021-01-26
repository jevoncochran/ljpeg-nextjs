import { useState } from "react";
import styles from "../../styles/ComingSoon.module.scss";
// import ljpegPlaceHolder from "../../assets/images/home/ljpeg_placeholder.jpg";
import { sendRequest } from "./sendRequest";

const ComingSoon = () => {
  const [inputActive, setInputActive] = useState(false);

  const [request, setRequest] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    setRequest({
      ...request,
      email: e.target.value,
    });
  };

  return (
    <div className={styles.cs}>
      <div
        className={styles["cs-img"]}
        style={{
          backgroundImage:
            "url(" +
            `${require("../../assets/images/home/ljpeg_placeholder.jpg")}` +
            ")",
        }}
      ></div>
      <p className={styles["cs-site-title"]}>l.jpeg</p>
      <div className={styles["cs-cta-container"]}>
        <p className={styles["cs-cta-txt"]}>SITE COMING SOON</p>
        <button
          className={
            inputActive ? styles["cs-cta-btn-hide"] : styles["cs-cta-btn"]
          }
          onClick={() => setInputActive(true)}
        >
          LET ME KNOW WHEN IT DROPS
        </button>
        <br />
        <form onSubmit={sendRequest}>
          <input
            className={
              inputActive ? styles["cs-cta-input"] : styles["cs-cta-input-hide"]
            }
            type="text"
            name="email"
            placeholder="Please enter your email..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
