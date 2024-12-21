import Application from "@/Components/Application/Application";
import { UserProvider } from "@/Components/contex/UserContext";
import { ImtinaComponent } from "@/Components/ImtinaComponent/ImtinaComponent";
import SearchBar from "@/Components/SearchBar/SearchBar";
import "./page.css";

export default function ImtinaPage() {
  return (
    <UserProvider>
      <main>
        <div className="container">
          <SearchBar />
          <h1 className="imtina-title">İmtina et</h1>
          <ImtinaComponent />
          <Application />
        </div>
      </main>
    </UserProvider>
  );
}
