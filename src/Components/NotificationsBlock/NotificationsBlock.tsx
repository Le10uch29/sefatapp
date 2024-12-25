import "./NotificationsBlock.css";
import system from "../../../public/system.png";
import Image from "next/image";
import { FC, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(true);
  const [isNew, setIsNew] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    if (isNew) setIsNew(false);
  };

  const handleHover = () => {
    if (!isNew) setIsNew(true);
  };

  const formattedDate = (() => {
    const [dayPart, timePart] = date.split(", Saat : ");
    return `${dayPart} Saat: ${timePart}`;
  })();

  if (!isVisible) return null;

  return (
    <div className="notification-content" onMouseEnter={handleHover}>
      {isNew && <span className="new-indicator" onClick={handleClick}></span>}
      <button className="delete-button" onClick={handleDelete}>
        &times;
      </button>
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
