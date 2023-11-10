import React from "react";
import { invest, numbers } from "../data";
import Image from "next/image";
import vector from "@/public/images/vector.png";

export default function Shape() {
  return (
    <section className="px-10 py-16 mt-16">
      <div className=" space-y-3 max-w-4xl text-left">
        <h1 className=" text-3xl md:text-7xl tracking-tighter">
          Confidently Shape Your Financial Future
        </h1>
        <p className="text-[#BDBDBD] text-sm md:text-xl leading-5">
          {" "}
          At RAFT, we empower you to confidently shape your financial future.Our
          modern approach simplifies saving and investing, making it easier than
          ever.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-start mt-14">
        {invest.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl  overflow-hidden border pt-5 pb-20 px-5 border-white/5 bg-[#131313]"
          >
            <div className="space-y-6">
              <h1 className=" text-3xl font-medium">{item.title}</h1>
              <p className=" text-[#BDBDBD]">{item.p}</p>
            </div>
            <div className=" aspect-auto overflow-hidden relative mt-24">
              <Image src={item.svg} className="mx-auto text-center " />

              <Image src={vector} className="absolute inset-0" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex justify-between items-center  w-full ">
          {numbers.map((item) => (
            <div className="flex  flex-col justify-center items-center">
              <h1 className=" text-xl md:text-7xl font-semibold">{item.digit}</h1>
              <p className=" text-[#BDBDBD] font-medium md:text-lg text-xs uppercase">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
