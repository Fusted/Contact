import { Component } from "react";
import LoginForm from "../loginForm/loginForm";
import Main from "../main/main";

export default class IsLogined extends Component {
  render() {
    if (this.props.authorize === true) {
      return <Main />;
    } else {
      return <LoginForm 
      onCorrectForm={this.props.onCorrectForm} />;
    }
  }
}
