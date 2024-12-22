"use client";

import { FC } from "react";
import { RezervationCard, RezervationCardProps } from "./RezervaionCard";
import "./Rezervation.css";

const RezervationList: FC = () => {
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
  ];

  return (
    <div className="list-container">
      <ul className="card-list">
        {cardRezerv.map((card, index) => (
          <li key={`${card.id}-${index}`} className="card-list__item">
            <RezervationCard {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RezervationList;
