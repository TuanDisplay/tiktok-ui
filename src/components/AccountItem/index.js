import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/ff378af39120d4eb668eef664f92098a.jpeg?lk3s=a5d48078&nonce=18852&refresh_token=9d3b898d1b99ded641e70953df5374c7&x-expires=1733655600&x-signature=CWzicvoGzaaKPeeD0WKe2DvO5cI%3D&shp=a5d48078&shcp=81f88b70"
        alt="letuankhang2002"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Lê Tuấn Khang</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <p className={cx("username")}>letuankhang2002</p>
      </div>
    </div>
  );
}
