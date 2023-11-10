import Image from "next/image";
import navRotate from "@/assets/arrowRotate.svg";
import { navLinks } from "../data";

export default function Nav() {
  return (
    <nav className=" flex font-normal items-center border-b border-[#3D3D3D] py-4 px-10 justify-between w-full">
      <div className="flex items-center gap-2">
        <Image
          src={navRotate}
          alt="nav"
          className=" flex items-center justify-center"
        />
        <h1 className=" text-2xl">Raft</h1>
      </div>
      <ul className=" hidden md:flex items-center text-base text-[#BDBDBD] justify-between gap-x-14 ">
        {navLinks.map((items) => (
          <div className="cursor-pointer hover:text-white duration-200">
            {items.title}
          </div>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-5 text-sm">
        <span>Login</span>
        <button className=" rounded-full py-2 px-3 flex items-center justify-center bg-[#2B892E]">
          Get Started
        </button>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        className="block md:hidden cursor-pointer"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.16425 7.25C3.16425 6.83579 3.50003 6.5 3.91425 6.5H20.4142C20.8285 6.5 21.1642 6.83579 21.1642 7.25C21.1642 7.66421 20.8285 8 20.4142 8H3.91425C3.50003 8 3.16425 7.66421 3.16425 7.25ZM3.16425 12.5C3.16425 12.0858 3.50003 11.75 3.91425 11.75H20.4142C20.8285 11.75 21.1642 12.0858 21.1642 12.5C21.1642 12.9142 20.8285 13.25 20.4142 13.25H3.91425C3.50003 13.25 3.16425 12.9142 3.16425 12.5ZM3.16425 17.75C3.16425 17.3358 3.50003 17 3.91425 17H20.4142C20.8285 17 21.1642 17.3358 21.1642 17.75C21.1642 18.1642 20.8285 18.5 20.4142 18.5H3.91425C3.50003 18.5 3.16425 18.1642 3.16425 17.75Z"
          fill="white"
        />
      </svg>
    </nav>
  );
}
