import React from "react";
import TopNavBar from "../TopNavBar/topNavBar";
import Table from "../Table/table";
import "./home.css";
import { AiOutlineUser } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

function Home() {
  var [search, setSearch] = React.useState("");
  return (
    <div>
      <TopNavBar />
      <div className="heading">
        <div className="headingIcon">
          <AiOutlineUser />
        </div>
        <div className="headingText">Managing Identities</div>
      </div>
      <div className="search">
        <div className="searchUsers">Search Users</div>
        <div className="searchFilters">
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(search + e.target.value)}
          ></input>
          <div className="searchListFilters"><FaFilter />Filters</div>
        </div>
      </div>
      <div className="tableContainer">
        <Table />
      </div>
    </div>
  );
}

export default Home;
