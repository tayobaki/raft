import navRotate from "@/assets/arrowRotate.svg";
import Image from "next/image";
import code from "@/public/images/qr-code-for-mobile-english-wikipedia-1.svg";
import playstore from "@/public/images/ion-logo-google-playstore.svg";
import apple from "@/public/images/ic-baseline-apple.svg";

export default function Footer() {
  return (
    <footer className=" px-10 py-24">
      <div className="flex items-center gap-2 border-b border-white/30 pb-7">
        <Image
          src={navRotate}
          alt="nav"
          className=" md:w-32 md:h-32 flex items-center justify-center"
        />
        <h1 className=" text-2xl md:text-9xl">Raft</h1>
      </div>

      <div className="flex md:flex-row flex-col items-start justify-between mt-20 gap-y-20 gap-x-20">
        <div className="flex sm:flex-row flex-col border border-dashed rounded-md p-3 items-start gap-3">
          <Image src={code} />
          <div className="flex flex-col gap-4  w-full">
            <p>Scan to download App on the Playstore and Appstore.</p>

            <div className="flex items-center gap-2">
              <Image src={playstore} />
              <Image src={apple} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-0 gap-8 w-full text-xs sm:text-lg">
          <ul className="space-y-3">
            <h1 className=" font-bold">About Us</h1>
            <li>Our company</li>
            <li>Careers</li>
            <li>Press kits</li>
          </ul>
          <ul className="space-y-3">
            <h1 className=" font-bold">Legal</h1>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>About us</li>
          </ul>
          <ul className="space-y-3">
            <h1 className=" font-bold">Support</h1>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <div className=" mt-28 flex flex-col gap-3 sm:gap-0 text-xs sm:flex-row sm:items-center w-full justify-between">
        <div className="flex w-full sm:justify-normal justify-between items-center gap-6">
          <h1>English (United Kingdom)</h1>
          <span>
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
                d="M12.5303 16.2803C12.2374 16.5732 11.7626 16.5732 11.4697 16.2803L3.96967 8.78033C3.67678 8.48744 3.67678 8.01256 3.96967 7.71967C4.26256 7.42678 4.73744 7.42678 5.03033 7.71967L12 14.6893L18.9697 7.71967C19.2626 7.42678 19.7374 7.42678 20.0303 7.71967C20.3232 8.01256 20.3232 8.48744 20.0303 8.78033L12.5303 16.2803Z"
                fill="white"
              />
            </svg>
          </span>
        </div>

        <span className=" whitespace-nowrap">Raft Corp. LLC.</span>
      </div>
    </footer>
  );
}
