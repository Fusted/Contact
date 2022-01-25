import LoginForm from "../LoginForm/LoginForm";
import Main from "../Main/Main";

function IsLogined(props) {
    if (props.authorize === true) {
      return <Main />;
    } else {
      return <LoginForm 
      onCorrectForm={props.onCorrectForm} />;
    }
}

export default IsLogined