import Image from "next/image";
import forbes from '@/public/images/forbes-logo-1.svg'
import bloomberg from '@/public/images/bloomberg-1.svg'
import reuters from '@/public/images/reuters-211.svg'
import cnn from '@/public/images/cnn-logo-1.svg'


export default function Featured() {
  return (
    <div className="py-4 pl-10 mt-11 space-y-12 md:mx-auto w-full md:max-w-3xl overflow-hidden">
      <h1 className=" uppercase text-[#BDBDBD] sm:text-xl text-sm text-center font-medium">
        Featured and seen in
      </h1>

      <div className="flex items-center justify-between gap-14 md:gap-20 overflow-hidden md:overflow-visible">
        <Image src={forbes} alt="forbes" />
        <Image src={bloomberg} alt="forbes" />
        <Image src={reuters} alt="forbes" />
        <Image src={cnn} alt="forbes" />

      </div>
    </div>
  );
}
