import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SettingCart from "../../Components/SettingCart/SetingCarts";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";

export default function SettingPage() {
  return (
    <UserProvider>
      <main>
        <div className="container">
          <SearchBar />
          <h1 className="parametrs-title">Parametrlər</h1>
          <SettingCart />
          <Application />
        </div>
      </main>
    </UserProvider>
  );
}
