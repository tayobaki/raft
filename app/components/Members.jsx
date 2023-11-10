import Image from "next/image";

import { member } from "../data";

export default function Members() {
  return (
    <section className=" bg-green-400 py-16 px-10 text-black">
      <h1 className="text-4xl md:text-7xl text-center max-w-3xl mx-auto">
        Join over 3 million members
      </h1>

      <div className="flex md:flex-row flex-col items-start justify-between mt-24">
        {member.map((item) => (
          <div className="flex flex-col gap-5 p-5 md:border-l-2 border-black">
            <p className=" ">{item.p}</p>
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <h1 className=" font-semibold">{item.name}</h1>
                <small className="">{item.small}</small>
              </div>
              <Image src={item.image} width={45} height={35} />
            </div>
          </div>
        ))}
      </div>


      <div className=" mt-9  flex items-end justify-end gap-2">
        <div className="rounded-full p-5 cursor-pointer relative bg-white w-fit">
          <span className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5 12L4.5 12M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
                stroke="#0F172A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="rounded-full cursor-pointer p-5 relative bg-white w-fit">
          <span className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.75 12C3.75 11.5858 4.08579 11.25 4.5 11.25L17.6893 11.25L12.2197 5.78033C11.9268 5.48744 11.9268 5.01256 12.2197 4.71967C12.5126 4.42678 12.9874 4.42678 13.2803 4.71967L20.0303 11.4697C20.3232 11.7626 20.3232 12.2374 20.0303 12.5303L13.2803 19.2803C12.9874 19.5732 12.5126 19.5732 12.2197 19.2803C11.9268 18.9874 11.9268 18.5126 12.2197 18.2197L17.6893 12.75L4.5 12.75C4.08579 12.75 3.75 12.4142 3.75 12Z"
                fill="#0F172A"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
