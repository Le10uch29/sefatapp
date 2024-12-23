"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Notification {
  text: string;
  date: string;
}

interface NotificationsContextProps {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
}

const NotificationsContext = createContext<
  NotificationsContextProps | undefined
>(undefined);

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
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
