import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SearchBar from "@/Components/SearchBar/SearchBar";
import RezervationList from "@/Components/RezervationList/RezervationList";
import "./page.css";

export default function RezervationPage() {
  return (
    <UserProvider>
      <main>
        <div className="container">
          <SearchBar />
          <h1 className="rezerv-title">Rezervasiyalar</h1>
          <RezervationList />
          <Application />
        </div>
      </main>
    </UserProvider>
  );
}
