import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import Card from "../card";

const ExpenseList = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  console.log(list);
  return (
    <div className="expense-list">
      {list.length ? (
        list.map((item, id) => <Card key={id} item={item} />)
      ) : (
        <div className="empty-list">
          <img
            src={require("../../assets/images/empty.png")}
            alt="Empty List"
            className="empty-list-image"
          />
          <label>Uh Oh! Your expense list is empty</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
