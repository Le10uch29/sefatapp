"use client";
import React, { useState } from "react";
import { useUserContext } from "../contex/UserContext";
import Image from "next/image";
import "./SettingCart.css";

const SettingCart: React.FC = () => {
  const { userData, setUserData } = useUserContext();
  const [formData, setFormData] = useState({
    ...userData,
    addressInput: `${userData.addressLine || ""}, ${
      userData.addressCity || ""
    }, ${userData.addressState || ""}, ${userData.addressCountry || ""}`.trim(),
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          setFormData({ ...formData, imageUrl: fileReader.result as string });
        }
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, addressInput: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const [addressLine, addressCity, addressState, addressCountry] =
      formData.addressInput.split(",").map((part) => part.trim());

    setUserData({
      ...formData,
      addressLine: addressLine || userData.addressLine,
      addressCity: addressCity || userData.addressCity,
      addressState: addressState || userData.addressState,
      addressCountry: addressCountry || userData.addressCountry,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="setting-cart-form">
      <div className="image-container">
        <Image
          src={
            formData.imageUrl ||
            "https://via.placeholder.com/275x340?text=275x340"
          }
          alt="Profile"
          width={275}
          height={340}
          className="image"
        />
        <div className="overlay">
          <label htmlFor="imageUpload" className="img-btn">
            Şəkili dəyiş
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      </div>

      <label>Ad/Soyad</label>
      <input
        type="text"
        name="Name"
        value={formData.Name}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Mobil nömrə</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber.toString()}
        onChange={handleChange}
      />

      <label>Ünvan</label>
      <input
        type="text"
        name="addressInput"
        value={formData.addressInput}
        onChange={handleAddressChange}
      />

      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};

export default SettingCart;
