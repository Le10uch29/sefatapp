"use client";
import React, { useContext, useState } from "react";



const UserContext = React.createContext(undefined);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ 
    imageUrl: "",
    Name: "",
    phoneNumber: "",
    email: "",
    addressLine: "",
    addressCity: "",
    addressState: "",
    addressCountry: "",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
