"use client";
import Image from "next/image";
import * as React from "react";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IRightSideProps {}

const RightSide: React.FunctionComponent<IRightSideProps> = (props) => {
  const [emailVal, setEmailVal] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailVal(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const data = {
      email: emailVal,
      password: password,
    };

    axios
      .post("/api/register", data)
      .then(() => {
        setIsLoading(false);
        signIn("credentials", {
          ...data,
          redirect: false,
        });
        router.push("/onboarding");
      })
      .catch((error) => {
        signIn("credentials", {
          ...data,
          redirect: false,
        });
        setIsLoading(false);
        router.refresh();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="border border-[#dadada] pt-[50px] pb-[30px] px-10 max-w-[350px] w-full">
      <div className="w-full flex justify-center items-center">
        <Image alt="logo" src={logo} width={174} height={50} />
      </div>
      <div className="flex flex-col">
        <div className="relative mt-10">
          <input
            type="email"
            placeholder=" "
            className="border border-[#dadada] rounded-sm w-full h-10 focus:outline-0 focus:ring-0 text-[14px] pl-[10px]"
            value={emailVal}
            onChange={handleEmailChange}
            required
          />
          <span
            className={`absolute text-gray-500 font-light whitespace-nowrap  ${
              emailVal
                ? "text-[8px] left-[10px] top-[2px]"
                : "text-[14px] top-[9px] left-[10px]"
            }`}
          >
            Enter your Email
          </span>
        </div>

        <div className="relative mt-10 -inset-y-[25px]">
          <input
            type="password"
            placeholder=" "
            className="border border-[#dadada] rounded-sm w-full h-10 focus:outline-0 focus:ring-0 text-[14px] pl-[10px]"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span
            className={`absolute text-gray-500 font-light whitespace-nowrap  ${
              password
                ? "text-[8px] left-[10px] top-[2px]"
                : "text-[14px] top-[9px] left-[10px]"
            }`}
          >
            Enter Password
          </span>
        </div>

        <button
          className="w-full border-none h-[31px] text-center bg-blue-500 text-white font-semibold rounded-[10px] text-[14px]"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Log in
        </button>

        {/* <div className="flex justify-center items-center mt-5">
          <span className="text-[14px] text-gray-500 font-medium uppercase">
            or
          </span>
        </div>

        <button
          onClick={() => signIn("google")}
          disabled={isLoading}
          className="border border-[#dadada] h-10 rounded-sm whitespace-nowrap flex justify-center items-center gap-2 mt-5"
        >
          <FcGoogle />
          <span className="text-[14px] text-gray-500 font-medium">
            Continue with Google
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default RightSide;
