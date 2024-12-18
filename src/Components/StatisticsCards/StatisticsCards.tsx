import React from "react";
import Image from "next/image";
import "./StatisticsCards.css";

interface CardData {
  id: number;
  iconSrc: string;
  title: string;
  value: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    iconSrc: "/Group403.png",
    title: "1 ay qazanc",
    value: "1250 azn",
  },
  {
    id: 2,
    iconSrc: "/Group498.png",
    title: "Pasiyent sayı",
    value: "15 nəfər",
  },
  {
    id: 3,
    iconSrc: "/Group500.png",
    title: "Rezerv et",
    value: "6 nəfər",
  },
  {
    id: 4,
    iconSrc: "/Group532.png",
    title: "Resept al",
    value: "4 nəfər",
  },
  {
    id: 5,
    iconSrc: "/Group532.png",
    title: "Analiz yoxla",
    value: "5 nəfər",
  },
];

const StatisticsCards: React.FC = () => {
  return (
    <div className="cardsContainer">
      {cardData.map((card) => (
        <div key={card.id} className="statistiCard">
          <div className="iconWrapper">
            <Image src={card.iconSrc} alt={card.title} width={48} height={48} />
          </div>
          <div>
            <p className="title">{card.title}</p>
            <p className="value">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;
