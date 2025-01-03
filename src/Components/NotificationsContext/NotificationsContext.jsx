"use client";

import React, { createContext, useContext, useState } from "react";



const NotificationsContext = createContext(undefined);

export const NotificationsProvider  = ({
  children,
}) => {
  const [notifications, setNotifications] = useState ([]);

  const addNotification = (notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  return (
    <NotificationsContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
};
