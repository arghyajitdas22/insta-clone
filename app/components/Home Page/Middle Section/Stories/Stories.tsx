"use client";
import * as React from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import ArrowRight from "./ArrowRight";

interface IStoriesProps {}

interface User {
  userName: string;
  avatar: string;
}

const Stories: React.FunctionComponent<IStoriesProps> = (props) => {
  const [users, setUsers] = React.useState<User[]>([]);

  const generateUsers = () => {
    const fakeUsers = [...Array(8)].map(() => ({
      userName: faker.internet.userName(),
      avatar: faker.internet.avatar(),
    }));

    setUsers(fakeUsers);
  };

  React.useEffect(() => {
    generateUsers();
  }, []);

  return (
    <div className="relative flex gap-x-[14px] mt-[50px] ml-[133px]">
      {users.map((user) => (
        <Story key={user.userName} userName={user.userName} src={user.avatar} />
      ))}
      <button
        onClick={generateUsers}
        className="w-6 h-6 rounded-full bg-[#fafafa] absolute flex justify-center items-center top-[20px] left-[580px] hover:scale-110 transition-all duration-200 ease-out"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Stories;
