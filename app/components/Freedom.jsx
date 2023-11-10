import Image from "next/image";
import frame from "@/public/images/frame-31.png";
import { finance } from "../data";

export default function Freedom() {
  return (
    <section className="px-10 mt-10 py-6">
      <div className=" max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-2xl md:text-7xl">
          Your Financial Freedom, Your Way
        </h1>
        <p className=" text-[#BDBDBD] text-lg md:text-xl leading-6">
          We believe that managing your finances should be effortless and
          cost-effective. That's why we offer you the freedom you deserve
        </p>
      </div>

      <Image
        src={frame}
        alt="frame"
        className=" object-cover rounded-xl mt-16 mx-auto"
      />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2  mt-16 gap-8 items-start ">
        {finance.map((item) => (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image src={item.svg}  />
              <h1 className=" font-medium md:text-2xl">{item.title}</h1>
            </div>

            <p className=" text-[#BDBDBD] leading-6 text-base">{item.p}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
