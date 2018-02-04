import React, { Component } from 'react';

import './App.css';

import News from './components/News';
import Comments from './components/Comments';
import AddNews from './components/AddNews';

let my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news : my_news
        }
    };
    componentDidMount () {
        /* Слушай событие "Создана новость"
          если событие произошло, обнови this.state.news
        */

    };
    componentWillUnmount () {
        /* Больше не слушай событие "Создана новость" */
    };

    render() {
        console.log('render');
        return (
            <div className="app">
                <h3>Новости</h3>
                <AddNews/>
                <News news={this.state.news}/>
                <Comments/>
            </div>
        );
    }
}

export default App;