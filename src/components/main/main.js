import { useEffect, useState } from "react";
import "./Main.css";
import CardList from "../CardList/CardList";
import Service from "../../Services/Service";
import SearchPanel from "../SearchPanel/SearchPanel";

const compareValues = (key) => {
  return function (a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return comparison;
  };
};

function Main() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");

  const changeData = (newData) => {
    const cards = newData;
    Service.sendData({ cards });
    setData(cards);
  };

  const onAdd = (newCard) => {
    const newData = data;
    newData.push(newCard);
    newData.sort(compareValues("firstName"));
    changeData(newData);
  };

  const onDelete = (id = "") => {
    const newArray = data.filter((item) => item.id !== id);
    const newData = [...newArray];
    changeData(newData);
  };

  const onEdit = (card) => {
    const index = data.findIndex((item) => item.id === card.id);
    const newArray = data;
    newArray[index] = card;
    const newData = [...newArray];
    changeData(newData);
  };

  const changeTerm = (value) => {
    setTerm(value);
  };

  const getInfo = async () => {
    Service.getResource().then((data) => {
      const newState = data.cards;
      setData(newState);
    });
  };

  const searchCard = (items, term) => {
    term = term.toLowerCase()
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      const fName = item.firstName.toLowerCase()
      const sName = item.secondName.toLowerCase()
      return (fName.indexOf(term) > -1 || sName.indexOf(term) > -1)
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  const visibleCards = searchCard(data, term);

  return (
    <main className="main">
      <SearchPanel onChangeTerm={changeTerm} />
      <CardList
        onDelete={onDelete}
        onAdd={onAdd}
        onEdit={onEdit}
        data={visibleCards}
        className="cardList"
      />
    </main>
  );
}

export default Main;
