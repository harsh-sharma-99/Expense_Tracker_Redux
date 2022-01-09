import React from "react";
import Card from "../card";

const ExpenseList = () => {
  const list = [
    {
      title: "First",
      logo: "sd",
      createdAt: Date.now(),
      amount: 123,
    },
    {
      title: "seacond",
      logo: "sd",
      createdAt: Date.now(),
      amount: 13423,
    },
  ];
  return (
    <div>
      {list.length
        ? list.map((item, id) => <Card key={id} item={item} />)
        : null}
    </div>
  );
};

export default ExpenseList;
