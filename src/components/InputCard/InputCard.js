import { Component } from "react/cjs/react.production.min";
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


export default class InputCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      values: {
        firstName:this.props.values.firstName,
        secondName:this.props.values.secondName,
        number:this.props.values.number,
        description:this.props.values.description,
        id:this.props.id
      }
    }
  }
  onChange = (e) => {
    const newValues = this.state.values
    newValues[e.target.getAttribute('data-value')] = e.target.value
    e.preventDefault()
    this.setState({
      values: newValues
    })
  }

  onConfirm = (e) => {
    const newState = this.state.values
    if(this.props.editing){
      // e.preventDefault()
      newState.id = this.props.id
      this.props.onEdited(newState)
    } else {
      newState.id = newState.firstName + newState.secondName + Math.random()
      this.props.onAdd(newState)
    }
    
  }
  render() {

    const {values} = this.props
    
    return (
      <Card color="primary" outline>
        <Form>
          <CardBody>
            <CardTitle tag="h5">
              <FormGroup>
                <Input
                  data-value='firstName'
                  type="text"
                  placeholder="Enter first name"
                  onChange={this.onChange}
                  defaultValue={values.firstName}
                />
              </FormGroup>
              <FormGroup>
                <Input 
                data-value='number'
                type="text" 
                placeholder="Enter phone"
                onChange={this.onChange}
                defaultValue={values.number}
                />
              </FormGroup>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              <FormGroup>
                <Input
                  data-value='secondName'
                  type="text"
                  placeholder="Enter second name"
                  onChange={this.onChange}
                  defaultValue={values.secondName}
                />
              </FormGroup>
            </CardSubtitle>
            <CardText>
              <Input
                data-value='description'
                type="text"
                placeholder="Enter description name"
                onChange={this.onChange}
                defaultValue={values.description}
              />
            </CardText>
            <Button type='submit' onClick={this.onConfirm}color="success">Confirm</Button>
            <Button type='reset' color="danger">Cancel</Button>
          </CardBody>
        </Form>
      </Card>
    );
  }
}

InputCard.defaultProps = {
  editing: false,
  values: {
    description:'',
    secondName:'',
    firstName:'',
    number:'',
    id:''
  }
}