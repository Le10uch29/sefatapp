"use client";

import { Poppins, Inter, Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "./globals.css";
import { NotificationsProvider } from "@/Components/NotificationsContext/NotificationsContext";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["700", "400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  weight: ["700", "400"],
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="az">
        <body
          className={`${poppins.variable} ${inter.variable} ${montserrat.variable}`}
        >
          <NotificationsProvider>{children}</NotificationsProvider>
        </body>
      </html>
    </Provider>
  );
}
