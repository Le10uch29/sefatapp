import Application2 from "@/Components/Application2/Application2";
import NotificationsBlockList from "@/Components/NotificationsBlock/NotificationsBlockList";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const NotificationsPage = () => {
  return (
    <UserProvider>
      <main>
    <div className="container">
    <Header />
      <SearchBar />
      <h1 className="notification-title">Bildirişlər</h1>
      <NotificationsBlockList />
      <Application2 />
      <Footer />  
    </div>
    </main>
    </UserProvider>
  );
};

export default NotificationsPage;
