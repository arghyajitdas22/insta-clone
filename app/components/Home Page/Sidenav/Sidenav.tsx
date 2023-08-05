import * as React from "react";
import Logo from "./Logo";
import NavBtn from "./NavBtn";
import HomeIcon from "./HomeIcon";
import Search from "./Search";
import Explore from "./Explore";
import Reels from "./Reels";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Create from "./Create";
import Profile from "./Profile";
import More from "./More";
import Link from "next/link";
import LogoutSec from "./Logout";

interface ISidenavProps {
  page: string;
}

const Sidenav: React.FunctionComponent<ISidenavProps> = ({ page }) => {
  return (
    <div className="flex flex-col max-w-[244px] w-full min-h-[100vh] border-r border-[#dadada] px-3 fixed left-0">
      <header className="flex items-center px-3 pt-[25px] pb-[19px] mb-[19px]">
        <Logo />
      </header>
      <div>
        <Link href={"/"}>
          <NavBtn tag="Home" onPage={page === "home" ? true : false}>
            <HomeIcon />
          </NavBtn>
        </Link>
        <NavBtn tag="Search" onPage={page === "search" ? true : false}>
          <Search />
        </NavBtn>
        <NavBtn tag="Explore" onPage={page === "explore" ? true : false}>
          <Explore />
        </NavBtn>
        <NavBtn tag="Reels" onPage={page === "reels" ? true : false}>
          <Reels />
        </NavBtn>
        <NavBtn tag="Messages" onPage={page === "messages" ? true : false}>
          <Messages />
        </NavBtn>
        <NavBtn
          tag="Notifications"
          onPage={page === "notifications" ? true : false}
        >
          <Notifications />
        </NavBtn>
        <Link href={"/create"}>
          <NavBtn tag="Create" onPage={page === "create" ? true : false}>
            <Create />
          </NavBtn>
        </Link>
        <NavBtn tag="Profile" onPage={page === "profile" ? true : false}>
          <Profile />
        </NavBtn>
      </div>

      <LogoutSec />
    </div>
  );
};

export default Sidenav;
