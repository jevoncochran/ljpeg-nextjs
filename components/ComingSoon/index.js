import { useState } from "react";
import styles from "../../styles/ComingSoon.module.scss";
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
    </div>
  );
};

export default ComingSoon;
