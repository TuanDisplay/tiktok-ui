import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

export default function AccountItem({ image, name, nickname }) {
  const renderPreview = (attrs) => {
    return (
      <div className={cx("preview")} tabIndex={-1} {...attrs}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <Image
            className={cx("avatar")}
            src={
              "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/434e865a8e0ddec2505bc19bfdb87cb1.jpeg?lk3s=a5d48078&nonce=96732&refresh_token=e5322e47cd284465addec377d6b4104a&x-expires=1736589600&x-signature=%2BBXKffAl7TmsbCAoqejaz589pJk%3D&shp=a5d48078&shcp=81f88b70"
            }
            alt={"nickname"}
          />
          <div className={cx("info-item")}>
            <h4 className={cx("nickname")}>
              <strong>{"theanh28entertainment"}</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </h4>
            <p className={cx("name")}>{"Theanh28 Entertainment"}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  nickname: PropTypes.string,
};
