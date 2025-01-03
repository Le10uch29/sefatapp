import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";
import SendComponent from "@/Components/SendComponent/SendComponent";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function SendPage() {
  return (
    <UserProvider>
      <main>
        <div className="container">
        <Header />
          <SearchBar />
          <h1 className="send-title">Nəticəni yolla</h1>
          <SendComponent />
          <Application />
          <Footer/>
        </div>
      </main>
    </UserProvider>
  );
}
