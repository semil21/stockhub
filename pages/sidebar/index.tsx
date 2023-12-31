// https://www.youtube.com/watch?v=aMjou4yXWdU
import { useState } from "react";
import Image from "next/image";

import control from "../images/control.png";
import logo from "../images/stockhub-logo.png"
import newLogo from "../images/StockHub-logos_transparent.png"
import HomePage from "../home";
import Link from "next/link";
import "../sidebar/sidebar.css"


const Sidebar = ({ isOpen }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User" },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder" },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-60" : "w-5"
        } sidebar bg-dark-purple h-screen p-5  pt-8 relative duration-300 sidebar`}
      >
        <Image
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src={newLogo}
            className={`logo cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6 link ">
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 ">
            <Image src={control} />
            <Link href="/home">
              <span
                className={`${
                  !open && "hidden"
                } heading origin-left duration-200  text-indigo-500 `}
              >
                {" "}
                Home Component
              </span>
            </Link>
          </li>
        </ul>
        <hr />
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={control} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <ul className="pt-6">
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
            <img src={control} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {" "}
              Blog
            </span>
          </li>
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Stock Hub </h1>
        <small>Buy Low Sell High</small>
      </div> */}
    </div>
  );
};
export default Sidebar;
