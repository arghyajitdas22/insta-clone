import getCurrentUser from "@/app/actions/getCurrentUser";
import Image from "next/image";
import * as React from "react";
import Avatar from "./Avatar";
import ForYou from "./ForYou";

interface ISuggestionsProps {}

const Suggestions: React.FunctionComponent<ISuggestionsProps> = async (
  props
) => {
  const currentUser = await getCurrentUser();

  return (
    <section className="w-full max-w-[320px] mt-[50px] ml-[65px]">
      <header className="flex justify-between items-center w-full">
        <div className="flex gap-x-2">
          {currentUser?.profileImage ? (
            <Image
              src={currentUser.profileImage}
              alt="profile-img"
              width={56}
              height={56}
              className="rounded-full"
            />
          ) : (
            <Avatar />
          )}
          <div className="flex flex-col pt-[8px]">
            <span className="text-[#000] text-[12px] font-semibold">
              {currentUser?.username}
            </span>
            <span className="text-[#000] text-[12px] font-normal">
              {currentUser?.name}
            </span>
          </div>
        </div>
        <p className="text-[12px] text-[#0095f6] leading-[16px] font-semibold">
          Switch
        </p>
      </header>

      <div className="flex items-center justify-between mt-3">
        <p className="text-[#737373] text-[14px] font-semibold">
          Suggested for you
        </p>
        <span className="text-[#000] text-[12px] font-medium">See all</span>
      </div>

      <ForYou />
    </section>
  );
};

export default Suggestions;
