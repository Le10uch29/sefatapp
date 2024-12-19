import Application from "@/Components/Application/Application";
import { UserProvider } from "../../Components/contex/UserContext";
import SettingCart from "../../Components/SettingCart/SetingCarts";

export default function App() {
  return (
    <UserProvider>
      <div className="container">
        <SettingCart />
        <Application />
      </div>
    </UserProvider>
  );
}
