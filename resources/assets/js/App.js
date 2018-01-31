import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'

import './App.css';

import Hello from './components/Hello';

class App extends Component {
    render() {
        return (
            <Hello />
        );
    }
}

export default App;