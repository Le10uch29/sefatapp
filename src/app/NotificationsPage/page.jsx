"use client";

import Header from "@/Components/Header/Header";
import SearchBar from "@/Components/SearchBar/SearchBar";
import NotificationsBlockList from "@/Components/NotificationsBlock/NotificationsBlockList";
import Application2 from "@/Components/Application2/Application2";
import Footer2 from "@/Components/Footer2/Footer2";
import { Provider } from "react-redux";
import store from "@/redux/store";

const NotificationsPage = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <main>
        <div className="container">
          <Header {...pageProps} />
          <SearchBar />
          <h1 className="notification-title">Bildirişlər</h1>
          <NotificationsBlockList {...pageProps} />
          <Application2 />
          <Footer2 />
        </div>
      </main>
    </Provider>
  );
};

export default NotificationsPage;
