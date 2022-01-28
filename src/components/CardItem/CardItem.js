import { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import EditingCard from "../EditingCard/EditingCard";

function CardItem(props) {
  const [editing, setEditing] = useState(false);
  const onEdit = () => {
    setEditing(true);
  };

  const onDelete = () => {
    props.onDelete(props.id);
  };

  if (!editing) {
    return (
      <Card color="primary" outline>
        <CardBody>
          <CardTitle tag="h5">
            <div>{props.firstName}</div>
            <div>{props.number}</div>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.secondName}
          </CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button onClick={onEdit} color="warning">
            Edit
          </Button>
          <Button onClick={onDelete} color="danger">
            Delete
          </Button>
        </CardBody>
      </Card>
    );
  } else {

    return (
      <EditingCard
        id={props.id}
        onEdit={props.onEdit}
        onAdd={props.onAdd}
        firstName={props.firstName}
        secondName={props.secondName}
        number={props.number}
        description={props.description}
      />
    );
  }
}

export default CardItem;
