import React from "react";

const Card = ({ item }) => {
  console.log(item, "card");
  return (
    <div>
      <div>Title:{item.title}</div>
      <div>Amount:{item.amount}</div>
    </div>
  );
};

export default Card;
