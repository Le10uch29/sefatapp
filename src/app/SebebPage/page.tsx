import Application from "@/Components/Application/Application";
import { UserProvider } from "@/Components/contex/UserContext";
import SearchBar from "@/Components/SearchBar/SearchBar";

export default function SendPage() {
  return (
    <UserProvider>
      <div className="container">
        <SearchBar />
        <h1 className="title">İmtina et</h1>

        <Application />
      </div>
    </UserProvider>
  );
}
