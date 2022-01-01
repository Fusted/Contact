import LoginForm from "../loginForm/loginForm";
import Main from "../main/main";

function IsLogined(props) {
  
    if (props.authorize === true) {
      return <Main />;
    } else {
      return <LoginForm 
      onCorrectForm={props.onCorrectForm} />;
    }
  
}

export default IsLogined