import { FC } from "react";
import { User } from "../../api/User";

export interface UserViewProps {
  user: User;
}

export const UserView: FC<UserViewProps> = () => {
  return (
    <>
      <div>
        <h2 className="name-title"></h2>
      </div>
    </>
  );
};
