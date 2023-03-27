import React from "react";
import MessageNav from "./Nav";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MessageNav />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
