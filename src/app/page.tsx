"use client";
import ComponentDetail from "../Components/ContactDetail/ContactDetail";
import StatisticsCards from "./../Components/StatisticsCards/StatisticsCards";
import SearchBar from "../Components/SearchBar/SearchBar";
import ExpenseStatistics from "../Components/ExpenseStatistics/ExpenseStatistics";
import LargeGraph from "../Components/LargeGraph/LargeGraph";
import BalanceGraph from "../Components/BalanceGraph/BalanceGraph";
import Application from "@/Components/Application/Application";
import { UserProvider, useUserContext } from "@/Components/contex/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

function Home() {
  const { userData } = useUserContext();

  return (
    <UserProvider>
      <div className="page">
        <header></header>

        <main className="main">
          <div className="container">
            <SearchBar />
            <h2>{userData.Name}</h2>
            <div className="section-1">
              <ComponentDetail />
              <div className="charts">
                <ExpenseStatistics />
                <LargeGraph />
                <BalanceGraph />
              </div>
            </div>
            <StatisticsCards />
            <Application />
          </div>
        </main>
        <footer className="footer"></footer>
      </div>
    </UserProvider>
  );
}
