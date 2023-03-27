import React from "react";

const MessageNav = () => {
  return (
    <div className="message-nav">
      <span className="logo">Right Roomie</span>
      <div className="user">
        <img
          className="img"
          src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt=""
        />
        <span>John</span>
        <button className="nav-button">Back</button>
      </div>
    </div>
  );
};

export default MessageNav;
