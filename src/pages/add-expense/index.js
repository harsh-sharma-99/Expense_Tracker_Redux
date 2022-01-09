import React from "react";
import TopFold from "../../components/topfold";
import "./styles.scss";
import AddForm from "./../../components/addForm/index";

const AddExpense = () => {
  return (
    <div className="add-topfold-wrapper">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
