"use client";

import React from "react";
import "./Application.css";
import Image from "next/image";
import EllipseOne from "../../../public/EllipseOne.png";
import EllipseTwo from "../../../public/EllipseTwo.png";
import EllipseThree from "../../../public/EllipseThree.png";
import EllipseFour from "../../../public/EllipseFour.png";
import ORH8EV2 from "../../../public/ORH8EV2.png";

const Application = () => {
  return (
    <div className="app-container">
      <Image src={ORH8EV2} alt={`ORH8EV2 `} className="app-screenshot" />
      <div className="content-section">
        <p className="appTitle">Ən yaxşı təcrübə üçün tətbiqimizi endirin</p>
        <div className="user-images">
          <Image src={EllipseOne} alt={`User-1`} className="user-avatar" />
          <Image src={EllipseTwo} alt={`User-2`} className="user-avatar" />
          <Image src={EllipseThree} alt={`User-3`} className="user-avatar" />
          <Image src={EllipseFour} alt={`User-4`} className="user-avatar" />
          <span className="customers-count">2400+</span>
        </div>
        <div className="happy-customers">
          <span className="customers-text">Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Application;
