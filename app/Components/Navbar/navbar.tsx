import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import search from "../../../public/assets/search.svg";
import app from "../../../public/assets/app.svg";
import expand from "../../../public/assets/expand.svg";
import notification from "../../../public/assets/notifications.svg";
import setting from "../../../public/assets/setting.svg";
import user from "../../../public/assets/pexels-photo-11038549.jpeg";
import "./navbar.scss";
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo cursor-pointer">
      <Image className="Image" src={logo} alt="logo" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <Image className="Image cursor-pointer" src={search} alt="icon" />
        <Image className="Image cursor-pointer"  src={app} alt="icon" />
        <Image className="Image cursor-pointer"  src={expand} alt="icon" />
        <div className="notification">
          <Image className="Image cursor-pointer"  src={notification} alt="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <Image className="Image cursor-pointer"  src={user} alt="user" />

          <span>Eman</span>
        </div>
        <Image className="Image cursor-pointer"  src={setting} alt="icon" />
      </div>
    </div>
  );
};

export default Navbar;
