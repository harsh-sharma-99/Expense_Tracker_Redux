import React from "react";
import "./styles.scss";
import TopFold from "./../../components/topfold";
import ExpenseList from "./../../components/expense-list/index";

const Home = () => {
  return (
    <div className="home-container">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
