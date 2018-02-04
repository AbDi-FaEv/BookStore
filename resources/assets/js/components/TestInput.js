import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TestInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
          textAreaValue : ''
        };
        this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
    }

    componentDidMount() {
        console.log('mounted');
        ReactDOM.findDOMNode(this.refs.myTestInput).focus();
    }
    onTextAreaChange(event) {
        this.setState({
            textAreaValue : event.target.value
        });
    }
    onButtonClickHandler() {
        console.log(this.state.textAreaValue);
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    }
    render() {
      return (
          <div>
              <input className='test-input'
                     defaultValue=''
                     placeholder="Введите значение"
                     ref='myTestInput'
              />
              <textarea value={this.state.textAreaValue}
                        onChange={this.onTextAreaChange}
              />
              <button className="btn btn-default" onClick={this.onButtonClickHandler}>показать alert</button>
          </div>
      );
    };
}

export default TestInput;