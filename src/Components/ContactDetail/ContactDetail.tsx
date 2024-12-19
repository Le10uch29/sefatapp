"use client";
import React from "react";
import { useUserContext } from "../contex/UserContext";
import Image from "next/image";
import "./ContactDetail.css";
import Link from "next/link";

const ComponentDetail: React.FC = () => {
  const { userData } = useUserContext();

  return (
    <div className="card">
      <div className="imageContainer">
        <Image
          src={
            userData.imageUrl ||
            "https://via.placeholder.com/275x340?text=275x340"
          }
          alt="Profile"
          width={275}
          height={340}
          className="image"
        />
        <Link href="/ParametrsPage" className="link">
          Şəkili dəyiş
        </Link>
      </div>
      <div className="details">
        <h2 className="detailTitle">Address</h2>
        <p className="detailDescr">
          <strong> Address Line:</strong> {userData.addressLine || ""}
        </p>
        <p className="detailDescr">
          <strong>City:</strong> {userData.addressCity || ""}
        </p>
        <p className="detailDescr">
          <strong>State:</strong> {userData.addressState || ""}
        </p>
        <p className="detailDescr">
          <strong>Country:</strong> {userData.addressCountry || ""}
        </p>
      </div>
      <div className="details-1">
        <h2 className="detailTitle">Contact Details</h2>
        <p className="detailDescr">
          <strong>Phone:</strong> {userData.phoneNumber || ""}
        </p>
        <p className="detailDescr">
          <strong>Email:</strong> {userData.email || ""}
        </p>
      </div>
    </div>
  );
};

export default ComponentDetail;
