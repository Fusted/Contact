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

function InputCard(props) {
  const [values, setValues] = useState({
    firstName: "",
    secondName: "",
    number: "",
    description: "",
    id: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    const newValues = values;
    newValues[e.target.getAttribute("data-value")] = e.target.value;
    setValues({ ...newValues });
  };

  const onSubmit = (e) => {
    const newState = values;
    newState.id = newState.firstName + newState.secondName + Math.random();
    props.onAdd(newState);
  };

  return (
    <Card color="primary" outline>
      <Form>
        <CardBody>
          <CardTitle tag="h5">
            <FormGroup>
              <Input
                data-value="firstName"
                type="text"
                placeholder="Enter first name"
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                data-value="number"
                type="text"
                placeholder="Enter phone"
                onChange={onChange}
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
              />
            </FormGroup>
          </CardSubtitle>
          <CardText>
            <Input
              data-value="description"
              type="text"
              placeholder="Enter description name"
              onChange={onChange}
            />
          </CardText>
          <Button type="submit" onClick={onSubmit} color="success">
            Confirm
          </Button>
          <Button type="reset" color="danger">
            Cancel
          </Button>
        </CardBody>
      </Form>
    </Card>
  );
}

export default InputCard;
