import React from "react";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { GoCreditCard, GoLock } from "react-icons/go";
import {
  AiFillHome,
  AiOutlineFileText,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { VscCircleOutline } from "react-icons/vsc";
import { FiCheckSquare } from "react-icons/fi";
import { IoMdChatbubbles, IoMdSettings } from "react-icons/io";
import { FaReceipt } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div className="logo">
        <img src="./logo.png" alt="Logo" />
      </div>
      <div>
        <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/home"
          //   onSelect={({ itemId }) => {
          //     // maybe push to the route
          //   }}
          items={[
            {
              title: "Home",
              itemId: "/home",
              // you can use your own custom Icon component as well
              // icon is optional
              elemBefore: () => <AiFillHome className="icon"/>,
            },
            {
              title: "ID Proofing",
              itemId: "/id_proof",
              elemBefore: () => <GoCreditCard className="icon" />,
              subNav: [
                {
                  title: "Managing Identities",
                  itemId: "/id_proof/identity",
                  // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                  elemBefore: () => <VscCircleOutline className="icon" />,
                },
                {
                  title: "Task Approval",
                  itemId: "/id_proof/task_approval",
                  elemBefore: () => <VscCircleOutline className="icon" />,
                },
                {
                  title: "Configure",
                  itemId: "/id_proof/configure",
                  elemBefore: () => <VscCircleOutline className="icon" />,
                },
              ],
            },
            {
              title: "Authentication",
              itemId: "/authentication",
              elemBefore: () => <GoLock className="icon" />,
            },
            {
              title: "Verification",
              itemId: "/verification",
              elemBefore: () => <FiCheckSquare className="icon" />,
            },
            {
              title: "Federation",
              itemId: "/federation",
              elemBefore: () => <AiOutlineFileText className="icon" />,
            },
            {
              title: "Dashboard",
              itemId: "/dashboard",
              elemBefore: () => <IoMdChatbubbles className="icon" />,
            },
            {
              title: "Billing",
              itemId: "/billing",
              elemBefore: () => <FaReceipt className="icon" />,
            },
          ]}
        />
      </div>
      <div
        style={{
          borderTop: "1px solid #e6e6e6",
          bottom: "0",
          position: "fixed",
          width: "13%",
        }}
      >
        <Navigation
          items={[
            {
              title: "Updates",
              itemId: "/updates",
              elemBefore: () => <FaReceipt className="icon" />,
            },
            {
              title: "Settings",
              itemId: "/settings",
              elemBefore: () => <IoMdSettings className="icon" />,
            },
            {
              title: "Help",
              itemId: "/help",
              elemBefore: () => <AiFillQuestionCircle className="icon" />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Navbar;
