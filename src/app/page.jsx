"use client";
import { Provider } from 'react-redux';
import ComponentDetail from "../Components/ContactDetail/ContactDetail";
import StatisticsCards from "../Components/StatisticsCards/StatisticsCards";
import SearchBar from "../Components/SearchBar/SearchBar";
import ExpenseStatistics from "../Components/ExpenseStatistics/ExpenseStatistics";
import LargeGraph from "../Components/LargeGraph/LargeGraph";
import BalanceGraph from "../Components/BalanceGraph/BalanceGraph";
import Application from "@/Components/Application/Application";
import Header from "@/Components/Header/Header";
import store from '../redux/store'
import { UserProvider, useUserContext } from "@/Components/contex/UserContext";
import Footer from '@/Components/Footer/Footer';

export default function App() {
  return (
    <Provider store={store}>
      <UserProvider>
      <Home />
      </UserProvider>
    </Provider>
  );
}

function Home() {
  const { userData } = useUserContext();

  return (
    <main className="main">
      <div className="container">
      <Header />
        <SearchBar />
        <h2 className="name-title">
          Salam {userData.Name} <span className="name-2th">Xoş gəldiniz!</span>
        </h2>
        <div className="section-1">
          <ComponentDetail />
          <div className="charts">
            <ExpenseStatistics />
            <BalanceGraph />
            <LargeGraph />
          </div>
        </div>
        <StatisticsCards />
        <Application />
        <Footer />
      </div>
    </main>
  );
}
