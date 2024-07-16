import Image from "next/image";
import { topDealUsers } from "../../data";
import "./TopDeal.scss";
const TopDealBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers?.map((user) => (
          <div
            className="listItem d-flex justify-content-between align-items-center"
            key={user.id}
          >
            <div className="user d-flex ">
            <Image
              className="mx-2"
              src={user.img}
              alt="View"
              width={50}
              height={50}
            />
            
              <div className="userTexts d-flex  flex-column">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDealBox;
