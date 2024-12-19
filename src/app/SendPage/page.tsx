import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";
import SendComponent from "@/Components/SendComponent/SendComponent";

export default function SendPage() {
  return (
    <UserProvider>
      <div className="container">
        <SearchBar />
        <h1 className="title">Nəticəni yolla</h1>
        <SendComponent />
        <Application />
      </div>
    </UserProvider>
  );
}
