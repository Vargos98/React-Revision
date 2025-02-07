import React from "react";
import Sidebar from "./components/Sidebar";
import BalanceDetails from "./components/BalanceDetails";
import FeesCard from "./components/FeesCard";
import TransactionsList from "./components/TransactionsList";
import WalletsSection from "./components/WalletsSection";
import SecuritySettings from "./components/SecuritySettings";

const App = () => (
  <div className="flex h-screen bg-lightGray">
    <Sidebar />
    <main className="flex-1 p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BalanceDetails />
        <FeesCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransactionsList />
        <WalletsSection />
      </div>
      <SecuritySettings />
    </main>
  </div>
);

export default App;
