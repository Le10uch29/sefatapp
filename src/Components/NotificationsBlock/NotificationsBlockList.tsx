"use client";

import React, { useState } from "react";
import NotificationsBlock, {
  NotificationsBlockProps,
} from "./NotificationsBlock";
import "./NotificationsBlock.css";

const NotificationsBlockList: React.FC = ({}) => {
  const itemsPerPage = 6;
  const initialNotifications: NotificationsBlockProps[] = [
    {
      text: "Siparişiniz yoldadı",
      img: "/system",
      date: "Last Wednesday at 9:42 AM",
    },
    {
      text: "Siparişiniz yoldadı",
      img: "/system",
      date: "Last Wednesday at 9:42 AM",
    },
    {
      text: "Siparişiniz yoldadı",
      img: "/system",
      date: "Last Wednesday at 9:42 AM",
    },
    {
      text: "Siparişiniz yoldadı",
      img: "/system",
      date: "Last Wednesday at 9:42 AM",
    },
    {
      text: "Siparişiniz yoldadı",
      img: "/system",
      date: "Last Wednesday at 9:42 AM",
    },
    {
      text: "Siparişiniz yoldadı",
      img: "/system",
      date: "Last Wednesday at 9:42 AM",
    },
    {
      text: "Siparişiniz yoldadı",
      img: "/system",
      date: "Last Wednesday at 9:42 AM",
    },
    {
      text: "Siparişiniz yoldadı",
      img: "/system",
      date: "Last Wednesday at 9:42 AM",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(initialNotifications.length / itemsPerPage);

  const currentNotifications = initialNotifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="Notifications-container">
      <ul className="Notifications-list">
        {currentNotifications.map((notification, index) => (
          <li key={`${index}`} className="Notification-list__item">
            <NotificationsBlock {...notification} />
          </li>
        ))}
      </ul>
      <div className="pagination-container">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NotificationsBlockList;
