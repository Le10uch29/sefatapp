import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SearchBar from "@/Components/SearchBar/SearchBar";
import RezervationList from "@/Components/RezervationList/RezervationList";
import "./page.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function RezervationPage() {
  return (
    <UserProvider>
      <main>
        <div className="container">
        <Header />
          <SearchBar />
          <h1 className="rezerv-title">Rezervasiyalar</h1>
          <RezervationList />
          <Application />
          <Footer />
        </div>
      </main>
    </UserProvider>
  );
}
