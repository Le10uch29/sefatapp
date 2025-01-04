"use client";
import React from "react";
import "./index.css";
import Image from "next/image";
import Mail from "@/assets/mail.svg";
import Phone from "@/assets/phone.svg";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value,
      message: e.target[3].value,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred");
    }

    // Clear form
    e.target.reset();
  };

  return (
    <div className="contactContainer">
      <Header />
      <h1>Əlaqə</h1>
      <div className="contactForm">
        <div className="left">
          <h3>Rezervasyon üçün əlaqə saxlayın</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <div className="adresses">
            <div className="adressItem">
              <Image src={Mail} alt="mail" />
              <p>
                <a href="mailto:shafatapp@health.care">shafatapp@health.care</a>
              </p>
            </div>
            <div className="adressItem">
              <Image src={Phone} alt="phone" />
              <p>
                <a href="tel:+(123) 456-7890">(123) 456-7890</a>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ad" required />
            <input type="text" placeholder="Telefon" required />
            <input type="email" placeholder="Email" required />
            <textarea
              cols="30"
              rows="10"
              placeholder="Mesaj"
              required
            ></textarea>
            <button type="submit">Göndər</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
