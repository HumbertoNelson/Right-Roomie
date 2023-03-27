import React from "react";
import Sidebar from "./Messages/Sidebar";
import Chat from "./Messages/Chat";

const MessageHome = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default MessageHome;
