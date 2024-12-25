"use client";

import { FC, useState } from "react";
import { RezervationCard, RezervationCardProps } from "./RezervaionCard";
import "./Rezervation.css";

const RezervationList: FC = () => {
  const itemsPerPage = 8;
  const cardRezerv: RezervationCardProps[] = [
    {
      id: 67352,
      img: "/rezerv.png",
      text: "Familia",
      descr1: "MRT",
      descr2: "Bonadea",
      descr3: "Ödənilib",
      date: "15/09 , Saat : 14:00",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      img: "/rezerv.png",
      text: "Familia",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      text: "Familia",
      img: "/rezerv.png",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      text: "Familia",
      img: "/rezerv.png",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      text: "Familia",
      img: "/rezerv.png",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      text: "Familia",
      img: "/rezerv.png",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      text: "Familia",
      img: "/rezerv.png",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      text: "Familia",
      img: "/rezerv.png",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      text: "Familia",
      img: "/rezerv.png",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
    {
      id: 12345,
      text: "Familia",
      img: "/rezerv.png",
      descr1: "CT Scan",
      descr2: "MedClinic",
      descr3: "Ödənilib",
      date: "20/10 , Saat : 12:30",
      link: "./SendPage",
      link2: "./ImtinaPage",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardRezerv.length / itemsPerPage);

  const currentRezervs = cardRezerv.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="list-container">
      <ul className="card-list">
        {currentRezervs.map((card, index) => (
          <li key={`${card.id}-${index}`} className="card-list__item">
            <RezervationCard {...card} />
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
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
      )}
    </div>
  );
};

export default RezervationList;
