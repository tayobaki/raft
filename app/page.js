import React from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Finance from "./components/Finance";
import Freedom from "./components/Freedom";
import Shape from "./components/Shape";
import Image from "next/image";
import vector from "@/public/images/frame-150.png";
import Cards from "./components/Cards";
import Members from "./components/Members";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white ">
      <Header />
      <Featured />
      <Finance />
      <Freedom />

      <div className="bg-[#48D64C] md:py-32 mt-20 py-8 px-10 md:px-16">
        <h1 className=" lg:text-9xl text-black sm:text-6xl text-2xl tracking-tighter sm:tracking-normal">
          Smart investments, secure payments, and expert guidance, all in one
          place.
        </h1>
      </div>
      <Shape />
      <div className="">
        <Image src={vector} className=" w-full" />
      </div>
      <Cards />
      <Members />
      <Faqs />
      <Footer />
    </main>
  );
}
