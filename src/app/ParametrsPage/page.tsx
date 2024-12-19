import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SettingCart from "../../Components/SettingCart/SetingCarts";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";

export default function App() {
  return (
    <UserProvider>
      <div className="container">
        <SearchBar />
        <h1 className="title">Parametrlər</h1>
        <SettingCart />
        <Application />
      </div>
    </UserProvider>
  );
}
