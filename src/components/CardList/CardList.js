import React from "react";
import CardItem from "../CardItem/CardItem";
import "./CardList.css";
import InputCard from "../InputCard/InputCard";

function CardList(props) {
  const elements = props.data.map((item) => {
    const { firstName, secondName, number, description, id } = item;
    return (
      <CardItem
        firstName={firstName}
        secondName={secondName}
        number={number}
        description={description}
        id={id}
        key={id}
        onEdit={props.onEdit}
        onAdd={props.onAdd}
        onDelete={props.onDelete}
      />
    );
  });

  return (
    <div className="cardList">
      <InputCard id={props.id} onAdd={props.onAdd} />
      {elements}
    </div>
  );
}

export default CardList;
