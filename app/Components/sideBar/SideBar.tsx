
import "./sideBar.scss";
import Image from "next/image";
import { menu } from "../../data";
import Link from "next/link";
const sideBar = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link href={listItem.url} className="listItem" key={listItem.id}>
              {/* <Image src={listItem.icon} alt="icon" width={40} height={30} /> */}
              <span>{listItem.icon}</span>
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default sideBar;
