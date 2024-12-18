import { UserProvider } from "../../Components/contex/UserContext";
import SettingCart from "../../Components/SettingCart/SetingCarts";

export default function App() {
  return (
    <UserProvider>
      <SettingCart />
    </UserProvider>
  );
}
