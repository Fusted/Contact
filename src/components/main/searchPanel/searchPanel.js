import React, {Component} from "react";

export default class SearchPanel extends Component{
    constructor (props) {
        super(props)
        this.state = {
            txt: ''
        }
    }

    changeTerm = (e) => { 
        this.setState({txt: e.target.value})
        this.props.onChangeTerm(e.target.value)
    }

    render() {
        return (
            <input 
                onChange = {this.changeTerm}
                className = "form-control search-input"
                type = "text"
                placeholder = 'Search by contacts'
            />
        )
    }
    
}

