import { Component } from "react";
import { Form, Input, Label, FormGroup, Button } from "reactstrap";
import "./LoginForm.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: "",
      checkbox: false,
      validpassword: "",
      validusername: "",
      validcheckbox: "",
      buttonClass: "",
    };
  }

  onChange = (e, type) => {
    if (type !== "checkbox") {
      this.setState({
        [type]: e.target.value,
      });
    } else {
      this.setState({
        checkbox: e.target.checked,
      });
    }
  };
  onSubmit = (e) => {
    const {checkbox, username, password} = this.state
    e.preventDefault();
    if (checkbox && username && password) {
      this.props.onCorrectForm(username, password);
    } else {
      this.onIncorrectForm(["checkbox", "username", "password"]);
    }
  };

  onIncorrectForm = (stateKeys) => {
    let newState = {};
    for (let key in stateKeys) {
      if (this.state[stateKeys[key]]) {
        newState[`valid${stateKeys[key]}`] = "is-valid";
      } else {
        newState[`valid${stateKeys[key]}`] = "is-invalid";
      }
    }
    newState.buttonClass = "enterFields";
    this.setState(newState);
  };

  render() {
    const {validpassword, validusername, validcheckbox, buttonClass} = this.state

    return (
      <Form className="form form-middle">
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="Enter your username or email"
            type="text"
            className={validusername}
            onChange={(e, type) => this.onChange(e, "username")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            className={validpassword}
            onChange={(e, type) => this.onChange(e, "password")}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              className={validcheckbox}
              onChange={(e, type) => this.onChange(e, "checkbox")}
            />
            I accept the user agreement.
          </Label>
        </FormGroup>

        <Button
          type="submit"
          color="info"
          outline
          onClick={this.onSubmit}
          className={buttonClass}
        >
          Submit
        </Button>
      </Form>
    );
  }
}
