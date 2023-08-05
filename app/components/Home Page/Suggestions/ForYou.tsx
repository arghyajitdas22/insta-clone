"use client";
import { faker } from "@faker-js/faker";
import * as React from "react";

interface IForYouProps {}

interface User {
  fullName: string;
  userName: string;
  avatar: string;
}

const ForYou: React.FunctionComponent<IForYouProps> = (props) => {
  const [users, setUsers] = React.useState<User[]>([]);

  const generateFakeUsers = () => {
    const fakeUsers = [...Array(5)].map(() => ({
      fullName: faker.person.fullName(),
      userName: faker.internet.userName(),
      avatar: faker.internet.avatar(),
    }));

    setUsers(fakeUsers);
  };

  React.useEffect(() => {
    generateFakeUsers();
  }, []);

  return (
    <div className="flex flex-col gap-y-4 mt-5">
      {users.map((user) => (
        <div className="flex justify-between" key={user.userName}>
          <div className="flex gap-x-2">
            <img
              src={user.avatar}
              alt="avt"
              width={32}
              height={32}
              className="rounded-[50%] w-8 h-8"
            />

            <div className="flex flex-col">
              <span className="text-[#000] text-[12px] font-semibold">
                {user.userName}
              </span>
              <span className="text-[#000] text-[12px] font-normal">
                {user.fullName}
              </span>
            </div>
          </div>

          <p className="text-[12px] text-[#0095f6] leading-[16px] font-semibold">
            Follow
          </p>
        </div>
      ))}
    </div>
  );
};

export default ForYou;
