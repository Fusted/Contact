import './App.css';
import { Component } from 'react/cjs/react.production.min';
import {Row, Col} from 'reactstrap'
import IsLogined from './components/isLogined/isLogined';
import Service from './services/service';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      authorize: false
    }
  }

  onCorrectForm = (login, password) => {
    Service.getAccounts()
    .then(array => {
      
      if(array.filter(element => (element[0] === login && element[1] === password)).length > 0){
        this.setState({
          authorize: true
        })
        localStorage.setItem('Contactsauthorized', 'true')
      }
    })
  }

  componentDidMount() {
    if (localStorage.getItem('Contactsauthorized') === 'true'){
      this.setState({
        authorize: true
      })
    }
  }

  render(){
    
    return (
      <div className="App">
        <Row>
          <Col>
            <IsLogined 
              authorize={this.state.authorize}
              onCorrectForm={this.onCorrectForm}
            />
          </Col>
        </Row>
        
      </div>
    )
  }
}


