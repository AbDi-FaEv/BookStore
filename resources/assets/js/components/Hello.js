import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "off",
            label: "Нажми"
        };

        this.press = this.press.bind(this);

    }

    press(e){
        console.log(e);
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }

    render() {
        return (
            <button onClick={this.press} className={this.state.class}>{this.state.label}</button>

        );
    }
}
export default Hello;