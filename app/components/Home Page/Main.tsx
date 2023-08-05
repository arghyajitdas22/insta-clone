import * as React from "react";

import MiddleSec from "./Middle Section/MiddleSec";
import Suggestions from "./Suggestions/Suggestions";
import Sidenav from "./Sidenav/Sidenav";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <main className="flex max-w-[100vw] w-full relative">
      <Sidenav page="home" />
      <div className="max-w-[calc(100vw-244px)] w-full absolute right-0 flex">
        <MiddleSec />
        <Suggestions />
      </div>
    </main>
  );
};

export default Main;
