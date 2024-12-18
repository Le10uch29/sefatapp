import { FC } from "react";
import { User } from "../../api/User";

export interface UserViewProps {
  user: User;
}

export const UserView: FC<UserViewProps> = ({ user }) => {
  return (
    <>
      <div>
        <h1 className="user-view__name">Salam {user.username} Xoş gəldiniz!</h1>
      </div>
    </>
  );
};
