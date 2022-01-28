import { Component } from "react/cjs/react.production.min";
import "./Main.css";
import CardList from "../CardList/CardList";
import Service from "../../Services/Service";
import SearchPanel from "../SearchPanel/SearchPanel";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      term: "",
    };
  }

  compareValues = (key) => {
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

  changeData = (newData) => {
    const cards = newData;
    Service.sendData({ cards });
    this.setState({ data: cards });
  };
  onAdd = (newCard) => {
    const newData = this.state.data;
    newData.push(newCard);
    newData.sort(this.compareValues("firstName"));
    this.changeData(newData);
  };

  onDelete = (id = "") => {
    const newArray = this.state.data.filter((item) => item.id !== id);
    const newData = [...newArray];
    this.changeData(newData);
  };

  onEdited = (card) => {
    const index = this.state.data.findIndex((item) => item.id === card.id);
    const newArray = this.state.data;
    newArray[index] = card;
    const newData = [...newArray];
    this.changeData(newData);
  };

  changeTerm = (value) => {
    this.setState({ term: value });
  };
  getInfo = async () => {
    Service.getResource().then((data) => {
      const newState = data.cards;
      this.setState({ data: newState });
    });
  };

  searchCard = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.firstName.indexOf(term) > -1);
  };
  componentDidMount() {
    this.getInfo();
  }

  render() {
    const {data, term} = this.state
    const visibleCards = this.searchCard(data, term)
    
    return (
      <main className="main">
        <SearchPanel
        onChangeTerm={this.changeTerm}
         />
        <CardList
          onDelete={this.onDelete}
          onAdd={this.onAdd}
          onEdited={this.onEdited}
          data={visibleCards}
          className="cardList"
        />
      </main>
    );
  }
}
