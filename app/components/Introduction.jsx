import Image from "next/image";
import headerImage from "@/public/images/header.png";

export default function Introduction() {
  return (
    <div className=" mt-16">
      <div className=" max-w-4xl space-y-7 text-center mx-auto">
        <div className="flex items-center justify-center gap-3 py-1 px-3 text-base mx-auto rounded-full bg-white/25 w-fit text-[#DCDCDC] backdrop-blur">
          <h1> Introducing Raft Cards</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5669 9.55806C13.811 9.80214 13.811 10.1979 13.5669 10.4419L7.31694 16.6919C7.07286 16.936 6.67714 16.936 6.43306 16.6919C6.18898 16.4479 6.18898 16.0521 6.43306 15.8081L12.2411 10L6.43306 4.19194C6.18898 3.94786 6.18898 3.55214 6.43306 3.30806C6.67714 3.06398 7.07286 3.06398 7.31694 3.30806L13.5669 9.55806Z"
              fill="white"
            />
          </svg>
        </div>

        <h1 className="text-5xl sm:tracking-normal tracking-tighter lg:text-8xl self-stretch">
          Building the future of banking.
        </h1>
        <p className="">
          Experience the future of banking with RAFT. We're here to empower your
          financial journey.
        </p>
        <button className=" rounded-full py-2 px-4 flex items-center justify-center mx-auto bg-[#2B892E]">
          Get Started
        </button>
      </div>
      <div className=" mt-20 py-4 px-10 mx-auto text-center flex items-center justify-center">
        <Image src={headerImage} alt="headerImage" className=" rounded-xl" />
      </div>
    </div>
  );
}
