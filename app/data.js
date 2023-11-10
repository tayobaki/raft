import crypto from "@/public/images/heroicons-solid-circle-stack.svg";
import banknotes from "@/public/images/heroicons-solid-banknotes.svg";
import solidstack from "@/public/images/heroicons-solid-circle-stack.svg";
import arrowleftright from "@/public/images/heroicons-solid-arrows-right-left.svg";
import money from "@/public/images/vuesax-bold-money-send.svg";
import wallet from "@/public/images/vuesax-bold-wallet-minus.svg";
import vector from "@/public/images/frame-127.png";
import vector2 from "@/public/images/frame-130.png";
import vector3 from "@/public/images/frame-136.png";
import down from "@/public/images/heroicons-solid-chevron-down.svg";

export const navLinks = [
  {
    title: "Solution",
  },
  {
    title: "Learn",
  },
  {
    title: "About",
  },
];

export const journey = [
  {
    title: "Seamless Payments",
    p: "Enjoy secure, seamless transactions that make managing your money a breeze.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.71431 5.6668L4.71431 14.1429C4.71431 14.5149 4.41279 14.8164 4.04084 14.8164C3.66889 14.8164 3.36737 14.5149 3.36737 14.1429L3.36737 4.0409C3.36737 3.86229 3.43833 3.69099 3.56463 3.56469C3.69093 3.43839 3.86222 3.36743 4.04084 3.36743L14.1429 3.36743C14.5148 3.36743 14.8164 3.66895 14.8164 4.0409C14.8164 4.41285 14.5148 4.71437 14.1429 4.71437L5.66674 4.71437L17.9864 17.0341C18.2495 17.2971 18.2495 17.7235 17.9864 17.9865C17.7234 18.2495 17.297 18.2495 17.034 17.9865L4.71431 5.6668Z"
          fill="white"
        />
      </svg>
    ),

    one: "+ $22.15 Received from Nguyen Shane ",
  },
  {
    title: "Smart Investing",
    p: "Grow your wealth confidently with our personalized investment solutions, tailored to your financial goals.",

    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 24 24"
        fill="none"
        className=" bg-purple-600 rounded-md p-1"
      >
        <path
          d="M21 6.375C21 9.06739 16.9706 11.25 12 11.25C7.02944 11.25 3 9.06739 3 6.375C3 3.68261 7.02944 1.5 12 1.5C16.9706 1.5 21 3.68261 21 6.375Z"
          fill="white"
        />
        <path
          d="M12 12.75C14.6852 12.75 17.1905 12.1637 19.0784 11.1411C19.7684 10.7673 20.4248 10.3043 20.9747 9.75674C20.9915 9.87831 21 10.0011 21 10.125C21 12.8174 16.9706 15 12 15C7.02944 15 3 12.8174 3 10.125C3 10.0011 3.00853 9.8783 3.02529 9.75674C3.57523 10.3043 4.23162 10.7673 4.92161 11.1411C6.80949 12.1637 9.31481 12.75 12 12.75Z"
          fill="white"
        />
        <path
          d="M12 16.5C14.6852 16.5 17.1905 15.9137 19.0784 14.8911C19.7684 14.5173 20.4248 14.0543 20.9747 13.5067C20.9915 13.6283 21 13.7511 21 13.875C21 16.5674 16.9706 18.75 12 18.75C7.02944 18.75 3 16.5674 3 13.875C3 13.7511 3.00853 13.6283 3.02529 13.5067C3.57523 14.0543 4.23162 14.5173 4.92161 14.8911C6.80949 15.9137 9.31481 16.5 12 16.5Z"
          fill="white"
        />
        <path
          d="M12 20.25C14.6852 20.25 17.1905 19.6637 19.0784 18.6411C19.7684 18.2673 20.4248 17.8043 20.9747 17.2567C20.9915 17.3783 21 17.5011 21 17.625C21 20.3174 16.9706 22.5 12 22.5C7.02944 22.5 3 20.3174 3 17.625C3 17.5011 3.00853 17.3783 3.02529 17.2567C3.57523 17.8043 4.23162 18.2673 4.92161 18.6411C6.80949 19.6637 9.31481 20.25 12 20.25Z"
          fill="white"
        />
      </svg>
    ),
    one: "Cryptocurrency",
  },
];

export const finance = [
  {
    svg: banknotes,
    title: "No minimum balance fees",
    p: "Say goodbye to minimum balance fees. Your account, your balance—no hidden charges",
  },
  {
    svg: solidstack,
    title: "No monthly fees",
    p: "Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account",
  },
  {
    svg: arrowleftright,
    title: "No bank transfer fees",
    p: "Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.",
  },
];

export const invest = [
  {
    svg: money,
    title: "Spend better",
    p: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.",
  },
  {
    svg: wallet,
    title: "Invest better",
    p: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.",
  },
];

export const numbers = [
  {
    digit: "50+",
    p: "cities",
  },
  {
    digit: "50,000+",
    p: "transactions",
  },
  {
    digit: "3M+",
    p: "users",
  },
  {
    digit: "5",
    p: "user ratings",
  },
];

export const member = [
  {
    p: "RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.",
    name: "Robert Fox",
    small: "Happy RAFT User",
    image: vector,
  },
  {
    p: "I can't express how grateful I am to RAFT. Their wealth management services have been a game-changer for my family's financial security. The expert guidance and personalized strategies have given us peace of mind, knowing that our future is in capable hands.",
    name: "Cameron Williamson",
    small: "Happy RAFT User",
    image: vector2,
  },
  {
    p: "RAFT's financial planning services have been a lifeline for me. I always struggled with managing my money, but their team crafted a tailored plan that addressed my goals and concerns. It's been a game-changer in achieving my financial dreams",
    name: "Esther Howard",
    small: "Happy RAFT User",
    image: vector3,
  },
];

export const questions = [
  {
    title: "How do I create an account with RAFT?",
    svg: down,
    p: 'lorem ipsum okdorlemiexe',
  },
  {
    title: "How does RAFT ensure the security of my financial data?",
    svg: down,
    p: 'lorem ipsum okdorlemiexe',
  },
  {
    title: "What types of transactions can I perform with RAFT?",
    svg: down,
    p: 'lorem ipsum okdorlemiexe',
  },
  {
    title: "What benefits does RAFT offer for wealth management?",
    svg: down,
    p: 'lorem ipsum okdorlemiexe',
  },
];
