import React from "react";
import CardItem from "../cardItem/cardItem";
import "./cardList.css";
import InputCard from "../inputCard/inputCard";
import { Component } from "react/cjs/react.production.min";

export default class CardList extends Component {
  render() {
    const {data} = this.props
    const elements = data.map((item) => {
      const { firstName, secondName, number, description, id } = item;
      return (
        <CardItem
          firstName={firstName}
          secondName={secondName}
          number={number}
          description={description}
          id={id}
          key={id}
          onEdited={this.props.onEdited}
          onAdd={this.props.onAdd}
          onDelete={this.props.onDelete}
        />
      );
    });
    
    return (
      <div className="cardList">
        <InputCard 
          id={this.props.id}
          onAdd={this.props.onAdd}
        />
        {elements}
      </div>
    );
  }
}
