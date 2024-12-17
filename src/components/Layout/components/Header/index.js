import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faKeyboard,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import RoutesConfig from "~/config/routes";
import Button from "~/components/Button";
import styles from "./Header.module.scss";
import { images } from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import {
  CoinsIcon,
  FeedbackIcon,
  InboxIcon,
  LanguageIcon,
  MessageIcon,
  ProfileIcon,
  SettingIcon,
  UploadIcon,
} from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;

  // Handle logic
  const handleMenuChange = (menuItem) => {
    // console.log(menuItem);

    switch (menuItem.type) {
      case "language":
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <ProfileIcon />,
      title: "View profile",
      to: "/@letuankhang2022",
    },
    {
      icon: <CoinsIcon />,
      title: "Get Coins",
      to: "/coin",
    },
    {
      icon: <SettingIcon />,
      title: "Setting",
      to: "/user",
    },

    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={RoutesConfig.home} className={cx("logo-link")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/60b99c0cc47197abbb34737a8ea1277b.jpeg?lk3s=a5d48078&nonce=21751&refresh_token=53ab1cf26b6fd0868796a1c754b94595&x-expires=1734235200&x-signature=Fkbeqs%2Fh9pOprGFLe05izRZPYXw%3D&shp=a5d48078&shcp=81f88b70"
                alt="letuankhang2002"
                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
