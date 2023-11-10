import Image from "next/image";
import card from '@/public/images/card.png'
import vector1 from '@/public/images/vector1.svg'
export default function Cards() {
  return (
    <section className=" px-10 pt-40 pb-16">
      <div className=" max-w-4xl mx-auto space-y-6 text-center">
        <span className="uppercase font-medium text-lg text-green-400">
          introducing
        </span>

        <h1 className=" text-2xl md:text-[76px]  leading-snug tracking-tighter">Introducing RAFT's Next-Gen Cards</h1>
        <p className=" text-sm md:text-xl text-[#BDBDBD]  max-w-2xl mx-auto text-center">
          Discover RAFT's latest innovation – our new cards. Elevate your
          banking experience with cutting-edge features, security, and
          unprecedented convenience.
        </p>
      </div>

      <div className=" mx-auto w-fit aspect-auto mt-16 relative grid grid-cols-12">
        <Image src={card} className=" mx-auto col-span-full "/>

        {/* <Image src={vector1} className="card hidden lg:block absolute -translate-x-[73%]  left-1/2 top-1 z-50" /> */}
      </div>
    </section>
  );
}
