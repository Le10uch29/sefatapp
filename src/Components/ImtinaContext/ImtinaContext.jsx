"use client";

import React, { createContext, useContext, useState } from "react";

const ImtinaContext = createContext(undefined);

export const ImtinaProvider = ({ children }) => {
  const [Imtina, setImtina] = useState([]);

  const addImtina = (Imtina) => {
    setImtina((prev) => [...prev, Imtina]);
  };

  return (
    <ImtinaContext.Provider value={{ Imtina, addImtina }}>
      {children}
    </ImtinaContext.Provider>
  );
};

export const useImtina = () => {
  const context = useContext(ImtinaContext);
  if (!context) {
    throw new Error("useImtina must be used within a ImtinaProvider");
  }
  return context;
};
