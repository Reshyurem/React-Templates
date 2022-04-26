import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ImSearch } from "react-icons/im";
import { AiOutlineBell } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import "./topNavBar.css";

function TopNavBar() {
  var [search, setSearch] = React.useState("");
  return (
    <div className="topBar">
      <div className="menuButton">
        <HiOutlineMenuAlt2 />
      </div>
      <div className="searchBar">
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(search + e.target.value)}
        ></input>
      </div>
      <div className="alertIcon">
        <AiOutlineBell />
      </div>
      <div className="account">
        <div className="accountIcon">MA</div>
        <div className="accountDetails">
          <div className="accountName">Mark Anderson</div>
          <div className="accountRole">Neo Killer</div>
        </div>
        <div className="accountDetailsExpand">
          <GoTriangleDown />
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
