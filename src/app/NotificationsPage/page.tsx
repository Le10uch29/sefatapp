import Application2 from "@/Components/Application2/Application2";
import NotificationsBlockList from "@/Components/NotificationsBlock/NotificationsBlockList";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";

const NotificationsPage = () => {
  return (
    <div className="container">
      <SearchBar />
      <h1 className="notification-title">Bildirişlər</h1>
      <NotificationsBlockList />
      <Application2 />
    </div>
  );
};

export default NotificationsPage;
