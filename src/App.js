import './App.css';
import { Component } from 'react/cjs/react.production.min';
import {Row, Col} from 'reactstrap'
import IsLogined from './components/isLogined/isLogined';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      authorize: true
    }
  }
  onCorrectForm = () => {
    console.log('submited')
    this.setState({
      authorize: true
    })
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


