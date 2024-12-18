"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  Name: string;
  email: string;
  phoneNumber: string | number;
  imageUrl?: string;
  addressLine?: string;
  addressCity?: string;
  addressState?: string;
  addressCountry?: string;
}

interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>({
    imageUrl: "",
    Name: "",
    phoneNumber: "",
    email: "",
    addressLine: "",
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
