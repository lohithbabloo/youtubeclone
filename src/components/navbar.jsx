import React, { useState } from "react";
import { FiMenu } from "react-icons/Fi";
const Navbar = ({ openCloseFunc }) => {
  const [open, setOpen] = useState(false);
  const openClose = () => {
    setOpen(!open);
    openCloseFunc(open);
  };
  return (
    <div className="sticky top-0 flex justify-between items-center text-center p-6 bg-black">
      <div className="flex justify-start gap-[20px] items-center">
        <button onClick={() => openClose()}>
          <FiMenu className="text-white text-2xl" />
        </button>
        <div className="flex text-center items-center gap-1">
          <a href="https://www.youtube.com/">
            <img src="/youtube.png" className="w-[35px]" />
          </a>
          <a href="https://www.youtube.com/" className="text-xl">
            <p className="text-white font-semibold">YouTube</p>
          </a>
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <div className="flex gap-0 items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[500px] p-[6px] pl-[15px] rounded-tl-3xl rounded-bl-3xl bg-black border border-zinc-700 text-white focus:outline"
          />
          <div className="hover-element group relative">
            <button className="rounded-tr-3xl rounded-br-3xl bg-zinc-700 p-[5px]">
              <img
                src="/magnifying-glass.png"
                width={28}
                height={28}
                className="mr-3 ml-3 "
              />
            </button>
            <div className="opacity-0 absolute top-[50px] ml-1 group-hover:opacity-100 transition duration-300 pointer-events-none">
              <span className="text-white">Search</span>
            </div>
          </div>
        </div>
        <div className="hover-element group relative">
          <button className="p-2 rounded-full bg-zinc-700">
            <img
              src="/microphone-black-shape.png"
              className="w-[22px] h-[22px] cursor-pointer"
            />
          </button>
          <div className="absolute top-[50px] w-[200px] text-left transition duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
            <span className="text-white">Search with your voice</span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly w-[200px]">
        <div className="hover-element group relative">
          <button className="hover:bg-zinc-700 p-2 rounded-full">
            <img src="/video.png" className=" w-7 h-7"></img>
          </button>
          <div className="absolute top-[50px] opacity-0 group-hover:opacity-100 transistion-opacity duration-300 pointer-events-none">
            <span className="text-white">Create</span>
          </div>
        </div>
        <div className="hover-element group relative">
          <button className="hover:bg-zinc-700 p-2 rounded-full ">
            <img src="/notification.png" className=" w-7 h-7"></img>
          </button>
          <div className="absolute top-[50px] opacity-0 group-hover:opacity-100 transistion-opacity duration-300 pointer-events-none">
            <span className="text-white">Notifications</span>
          </div>
        </div>
        <button>
          <img src="/user.png" className=" w-7 h-7"></img>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
