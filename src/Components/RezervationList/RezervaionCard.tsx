"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Rezervation.css";

export interface RezervationCardProps {
  img: string;
  text: string;
  id: number;
  descr1: string;
  descr2: string;
  descr3: string;
  date: string;
  link: string;
  link2: string;
}

export const RezervationCard: FC<RezervationCardProps> = ({
  img,
  text,
  id,
  descr1,
  descr2,
  descr3,
  date,
  link,
  link2,
}) => {
  const formattedDate = (() => {
    const [dayPart, timePart] = date.split(", Saat : ");
    return `${dayPart} Saat: ${timePart}`;
  })();

  return (
    <div className="rezerv-card">
      <div className="image-comteiner">
        <Image
          src={img || "https://via.placeholder.com/275x340?text=275x340"}
          alt={`Image for`}
          width={267}
          height={276}
          className="rezerv-image"
        />
        <span className="block-descr">{text}</span>
      </div>
      <div className="content">
        <span className="id-rezerv">{id}</span>
        <h2 className="content-title">Rezerv təsdiq olunub</h2>
        <p className="content-descr">Xidmət növü: {descr1}</p>
        <p className="content-descr">Klinika: {descr2}</p>
        <p className="content-descr">Ödəniş: {descr3}</p>
        <span className="content-date">{formattedDate}</span>
        <div className="link-group">
          <Link href={link || "#"} className="send-link">
            Nəticəni yolla
          </Link>
          <Link href={link2 || "#"} className="delete-link">
            İmtina et
          </Link>
        </div>
      </div>
    </div>
  );
};
