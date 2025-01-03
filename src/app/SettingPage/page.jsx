import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SettingCart from "../../Components/SettingCart/SetingCarts";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function SettingPage() {
  return (
    <UserProvider>
      <main>
        <div className="container">
        <Header/>
          <SearchBar />
          <h1 className="parametrs-title">Parametrlər</h1>
          <SettingCart />
          <Application />
          <Footer />
        </div>
      </main>
    </UserProvider>
  );
}
