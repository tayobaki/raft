import Image from "next/image";
import { journey, navLinks } from "../data";
import vector from "@/public/images/vector.png";
import crypto from "@/public/images/heroicons-solid-circle-stack.svg";
import person from "@/assets/Frame 98.png";
import wallet from "@/assets/wallet.svg";

export default function Finance() {
  return (
    <section className="py-4 px-10 mt-16">
      <div className="flex flex-col gap-6 items-center md:max-w-4xl md:mx-auto text-center">
        <h1 className=" text-3xl tracking-tighter md:tracking-normal md:text-7xl font-normal">
          Elevate Your Financial Journey with RAFT
        </h1>
        <p className=" text-xs md:text-xl text-[#989898] leading-7">
          RAFT offers a world of financial possibilities. From investments to
          payments, we've got you covered. Join us and unlock your financial
          potential today.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mt-16">
        {journey.map((item) => (
          <div className=" bg-[#131313] p-6 rounded-xl border h-[300px] relative md:h-[500px] space-y-5 flex flex-col  border-white/5">
            <div className="gradient mx-auto flex-1 flex items-center gap-1 flex-col w-full text-center mt-4">
              <div className="flex items-center pl-3 pr-5 py-2 border border-[#202020] gap-3 rounded-3xl text-white/80 text-sm bg-[#202020] ">
                <span className=" rounded-md bg-[#202020] shadow-xl drop-shadow-2xl  p-2">
                  {item.svg}
                </span>
                {item.one}
              </div>
            </div>
            <div className="flex-1  bg-[#131313] z-50 gap-3 justify-end flex flex-col">
              <h1 className=" font-semibold text-xl">{item.title}</h1>
              <p className=" text-sm text-[#BDBDBD]">{item.p}</p>
            </div>
            <Image
              src={vector}
              alt="vector"
              className="absolute top-0 animate-pulse object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex w-full  items-start md:flex-row flex-col gap-3 mt-3">
        <div className="md:w-[40%] w-full bg-[#131313] p-6 rounded-xl min-h-[300px]">
          <div className="bg-[#202020] p-5 rounded-xl">
            <div className="flex items-center gap-4">
              <Image src={person} />

              <div className=" flex flex-col gap-1">
                <h1 className=" text-xs sm:text-base whitespace-nowrap">Wade Warren</h1>
                <span className="text-[6px] sm:text-base">Private wealth manager</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <span className=" text-[9px] sm:text-base">Send message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2.25 12.7593C2.25 14.3604 3.37341 15.754 4.95746 15.987C6.04357 16.1467 7.14151 16.27 8.25 16.3556V21L12.326 16.924C12.6017 16.6483 12.9738 16.4919 13.3635 16.481C15.2869 16.4274 17.1821 16.2606 19.0425 15.9871C20.6266 15.7542 21.75 14.3606 21.75 12.7595V6.74056C21.75 5.13946 20.6266 3.74583 19.0425 3.51293C16.744 3.17501 14.3926 3 12.0003 3C9.60776 3 7.25612 3.17504 4.95747 3.51302C3.37342 3.74593 2.25 5.13956 2.25 6.74064V12.7593Z"
                  stroke="#BDBDBD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className=" mt-16 space-y-4 text-xs sm:text-base">
            <h1 className=" font-semibold">Wealth Management</h1>
            <p className="text-[#BDBDBD] text-[7px]">
              Make informed decisions for your financial future with our wealth
              management expertise.
            </p>
          </div>
        </div>
        <div className="md:w-[60%] w-full bg-[#131313] p-6 rounded-xl min-h-[300px]">
          <div className="mx-auto grid grid-cols-3 gap-4 items-center max-w-xs">
            <div className=" rounded-xl w-fit bg-[#202020] shadow-lg border border-white/5 p-3">
              <Image src={wallet} />
            </div>
            <div className=" rounded-xl w-fit bg-[#202020] shadow-lg border border-white/5 p-3">
              <Image src={wallet} />
            </div>
            <div className=" rounded-xl w-fit bg-[#202020] shadow-lg border border-white/5 p-3">
              <Image src={wallet} />
            </div>
            <div className=" rounded-xl w-fit bg-[#202020] shadow-lg border border-white/5 p-3">
              <Image src={wallet} />
            </div>
            <div className=" rounded-xl w-fit bg-[#202020] shadow-lg border border-white/5 p-3">
              <Image src={wallet} />
            </div>
            <div className=" rounded-xl w-fit bg-[#202020] shadow-lg border border-white/5 p-3">
              <Image src={wallet} />
            </div>
          </div>

          <div className=" mt-16 space-y-4 text-xs sm:text-base">
            <h1 className=" font-semibold">Financial Planning</h1>
            <p className="text-[#BDBDBD] text-[7px]">
              Achieve your financial dreams with our comprehensive financial
              planning services, guiding you toward a secure future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
