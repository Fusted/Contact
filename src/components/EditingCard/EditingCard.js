import { useState } from "react";
import {
  Input,
  Form,
  FormGroup,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

function EditingCard(props) {
  const { firstName, secondName, number, description, id } = props;
  const [values, setValues] = useState({
    firstName: firstName || "",
    secondName: secondName || "",
    number: number || "",
    description: description || "",
    id: id,
  });

  const onChange = (e) => {
    e.preventDefault();
    const newValues = values;
    newValues[e.target.getAttribute("data-value")] = e.target.value;
    setValues({ ...newValues });
  };

  const onConfirm = (e) => {
    e.preventDefault()
    const newState = values;
    newState.id = props.id;
    props.onEdit(newState);
    props.onCancel()
  };


  return (
    <Card color="primary" outline>
      <Form className="teeest">
        <CardBody>
          <CardTitle tag="h5">
            <FormGroup>
              <Input
                data-value="firstName"
                type="text"
                placeholder="Enter first name"
                onChange={onChange}
                defaultValue={firstName}
              />
            </FormGroup>
            <FormGroup>
              <Input
                data-value="number"
                type="text"
                placeholder="Enter phone"
                onChange={onChange}
                defaultValue={number}
              />
            </FormGroup>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            <FormGroup>
              <Input
                data-value="secondName"
                type="text"
                placeholder="Enter second name"
                onChange={onChange}
                defaultValue={secondName}
              />
            </FormGroup>
          </CardSubtitle>
          <CardText>
            <Input
              data-value="description"
              type="text"
              placeholder="Enter description name"
              onChange={onChange}
              defaultValue={description}
            />
          </CardText>
          <Button type="submit" onClick={onConfirm} color="success">
            Confirm
          </Button>
          <Button type="reset" onClick={props.onCancel} color="danger">
            Cancel
          </Button>
        </CardBody>
      </Form>
    </Card>
  );
}

export default EditingCard;
