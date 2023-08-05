"use client";
import * as React from "react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { error } from "console";

interface IRightSideProps {}

const RightSide: React.FunctionComponent<IRightSideProps> = (props) => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const data = {
      name,
      username,
      bio,
    };

    console.log(data);

    axios
      .post("/api/update", data)
      .then(() => {
        setIsLoading(false);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
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
      <div className="flex flex-col mt-10 gap-y-2">
        <div className="relative ">
          <input
            type="text"
            placeholder=" "
            className="border border-[#dadada] rounded-sm w-full h-10 focus:outline-0 focus:ring-0 text-[14px] pl-[10px]"
            value={name}
            onChange={handleNameChange}
            required
          />
          <span
            className={`absolute text-gray-500 font-light whitespace-nowrap  ${
              name
                ? "text-[8px] left-[10px] top-[2px]"
                : "text-[14px] top-[9px] left-[10px]"
            }`}
          >
            Enter your name
          </span>
        </div>

        <div className="relative mt-2">
          <input
            type="email"
            placeholder=" "
            className="border border-[#dadada] rounded-sm w-full h-10 focus:outline-0 focus:ring-0 text-[14px] pl-[10px]"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <span
            className={`absolute text-gray-500 font-light whitespace-nowrap  ${
              username
                ? "text-[8px] left-[10px] top-[2px]"
                : "text-[14px] top-[9px] left-[10px]"
            }`}
          >
            Choose an username
          </span>
        </div>

        <div className="relative mt-2">
          <input
            type="email"
            placeholder=" "
            className="border border-[#dadada] rounded-sm w-full h-10 focus:outline-0 focus:ring-0 text-[14px] pl-[10px]"
            value={bio}
            onChange={handleBioChange}
          />
          <span
            className={`absolute text-gray-500 font-light whitespace-nowrap  ${
              bio
                ? "text-[8px] left-[10px] top-[2px]"
                : "text-[14px] top-[9px] left-[10px]"
            }`}
          >
            Tell us about yourself!
          </span>
        </div>

        <button
          className="w-full border-none h-[31px] text-center bg-blue-500 text-white font-semibold rounded-[10px] text-[14px] mt-2"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default RightSide;
