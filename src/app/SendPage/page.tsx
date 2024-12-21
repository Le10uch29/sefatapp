import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";
import SendComponent from "@/Components/SendComponent/SendComponent";

export default function SendPage() {
  return (
    <UserProvider>
      <main>
        <div className="container">
          <SearchBar />
          <h1 className="send-title">Nəticəni yolla</h1>
          <SendComponent />
          <Application />
        </div>
      </main>
    </UserProvider>
  );
}
