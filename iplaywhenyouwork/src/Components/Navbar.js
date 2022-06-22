import "../style/components/Navbar.css";
import navLogo from "../static/img/nav-logo.png";
import iconPopover from "../static/img/icon/icon-popover.png";
import iconNoti from "../static/img/icon/icon-noti.png";
import iconMsg from "../static/img/icon/icon-msg.png";
import iconMenus from "../static/img/icon/icon-menus.png";
import ImageComponent from "./ImageComponent";
import NameComponent from "./NameComponent";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import ParrotorHuman from "./ParrotOrHuman";


const Navbar = () => {
  const navbarRightLogout = "로그아웃";
  const [parrotGame, setParrotGame] = useState(false);
  const openParrot = () => {
    setParrotGame(!parrotGame)
  }
  const navigate = useNavigate();
  const onClicknavLogo = () => {
    navigate("/");
  };
  const onClickIconMsg = () => {
    navigate("/chats");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          className="navbar-logo"
          src={navLogo}
          alt="nav-logo"
          onClick={onClicknavLogo}
        />
      </div>
      <div className="navbar-right">
        <div className="navbar-right-profile">
          <NameComponent></NameComponent>
          <ImageComponent></ImageComponent>
        </div>
        <div className="navbar-right-icons">
          <img
            className="icon-popover icon-button"
            src={iconPopover}
            alt="icon-popover"
          />
          <img
            className="icon-noti icon-button"
            src={iconNoti}
            alt="icon-noti"
            onClick={openParrot}    
          />

          {parrotGame ? <ParrotorHuman/>:null}
          <img
            className="icon-msg icon-button"
            src={iconMsg}
            alt="icon-msg"
            onClick={onClickIconMsg}
          />

          <img
            className="icon-menus icon-button"
            src={iconMenus}
            alt="icon-menus"
          />
        </div>
        <div className="navbar-right-logout">{navbarRightLogout}</div>
      </div>
    </div>
  );
};

export default Navbar;
