import Image from "next/image";
import * as React from "react";
import mobiles from "@/app/assets/home-phones.png";
import RightSide from "../components/Onboarding Page/RightSide";

interface IOnboardingProps {}

const Onboarding: React.FunctionComponent<IOnboardingProps> = (props) => {
  return (
    <main className="flex max-w-[100vw] w-full bg-[#fff] min-h-[100vh]">
      <div className="max-w-[50vw] w-full flex justify-end items-center mr-8">
        <Image src={mobiles} alt="mobiles" width={380.13} height={581.15} />
      </div>
      <div className="max-w-[50vw] w-full flex items-center justify-start ml-8">
        <RightSide />
      </div>
    </main>
  );
};

export default Onboarding;
