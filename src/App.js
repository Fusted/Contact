import React, { useState, useEffect } from "react";
import "./App.css";
import { Row, Col } from "reactstrap";
import Service from "./Services/Service";
import Main from "./components/Main/Main";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const [authorize, setAuthorize] = useState(false);

  const onCorrectForm = (login, password) => {
    Service.getAccounts().then((array) => {
      if (
        array.filter(
          (element) => element[0] === login && element[1] === password
        ).length > 0
      ) {
        setAuthorize(true);
        localStorage.setItem("Contactsauthorized", "true");
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem("Contactsauthorized") === "true") {
      setAuthorize(true);
    }
  }, [authorize]);

  if (authorize) {
    return (
      <div className="App">
        <Row>
          <Col>
            <Main />
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Row>
          <Col>
            <LoginForm onCorrectForm={onCorrectForm} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
