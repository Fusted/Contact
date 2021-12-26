import { Component } from "react/cjs/react.production.min";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import InputCard from "../inputCard/inputCard"; 

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }
  }
  onEdit = () => {
    this.setState({
      editing: true
    })
  }

  onDelete = () => {
    this.props.onDelete(this.props.id)
  }

  render() {
    if (!this.state.editing) {
      return (
        <Card color="primary" outline>
          <CardBody>
            <CardTitle tag="h5">
              <div>{this.props.firstName}</div>
              <div>{this.props.number}</div>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {this.props.secondName}
            </CardSubtitle>
            <CardText>{this.props.description}</CardText>
            <Button onClick={this.onEdit} color="warning">Edit</Button>
            <Button onClick={this.onDelete}color="danger">Delete</Button>
          </CardBody>
        </Card>
      )
    } else {
      
      return (
        <InputCard 
          id={this.props.id}
          editing={true}
          onEdited={this.props.onEdited}
          onAdd={this.props.onAdd}
          values = {this.props}
        />
      )
    }
  }
}
