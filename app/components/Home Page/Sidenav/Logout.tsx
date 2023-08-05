"use client";
import * as React from "react";
import NavBtn from "./NavBtn";
import More from "./More";
import { signOut } from "next-auth/react";

interface ILogoutSecProps {}

const LogoutSec: React.FunctionComponent<ILogoutSecProps> = (props) => {
  return (
    <footer className="mt-[120px]" onClick={() => signOut()}>
      <NavBtn tag="Logout" onPage={false}>
        <More />
      </NavBtn>
    </footer>
  );
};

export default LogoutSec;
