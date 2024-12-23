import "./NotificationsBlock.css";
import system from "../../../public/system.png";
import Image from "next/image";
import { FC } from "react";

export interface NotificationsBlockProps {
  img: string;
  text: string;
  date: string;
}

const NotificationsBlock: FC<NotificationsBlockProps> = ({
  img,
  text,
  date,
}) => {
  const formattedDate = (() => {
    const [dayPart, timePart] = date.split(", Saat : ");
    return `${dayPart} Saat: ${timePart}`;
  })();

  return (
    <div className="notification-content">
      <Image
        alt="user-icon"
        src={system || img}
        width={55}
        height={55}
        className="Notification-img"
      />
      <div className="notification-block">
        <p className="notification-text">{text}</p>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default NotificationsBlock;
