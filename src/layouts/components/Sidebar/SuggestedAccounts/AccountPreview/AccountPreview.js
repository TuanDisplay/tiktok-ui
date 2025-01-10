import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Image from "~/components/Image";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

export default function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Image
          className={cx("avatar")}
          src={
            "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/434e865a8e0ddec2505bc19bfdb87cb1.jpeg?lk3s=a5d48078&nonce=96732&refresh_token=e5322e47cd284465addec377d6b4104a&x-expires=1736589600&x-signature=%2BBXKffAl7TmsbCAoqejaz589pJk%3D&shp=a5d48078&shcp=81f88b70"
          }
          alt={"noImage"}
        />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </header>
      <div className={cx("body")}>
        <h4 className={cx("nickname")}>
          <strong>{"theanh28entertainment"}</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <p className={cx("name")}>{"Theanh28 Entertainment"}</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Follows</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}
