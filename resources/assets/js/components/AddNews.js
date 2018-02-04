import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Addnews.css';

class AddNews extends Component {

    componentDidMount () {
        ReactDOM.findDOMNode(this.refs.author).focus();
    };

    constructor(props) {
        super(props);
        this.state = {
            agreeNotChecked : true,
            authorIsEmpty : true,
            textIsEmpty : true
        };
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    };

    onAuthorChange (event) {
        if (event.target.value.trim().length > 0) {
            this.setState({authorIsEmpty: false})
        } else {
            this.setState({authorIsEmpty: true})
        }
    };

    onTextChange (event) {
        if (event.target.value.trim().length > 0) {
            this.setState({textIsEmpty: false})
        } else {
            this.setState({textIsEmpty: true})
        }
    };

    onCheckRuleClick (event) {
        this.setState({
           agreeNotChecked : !this.state.agreeNotChecked,
        });
    };
    onBtnClickHandler (event) {
        event.preventDefault();
        let author = ReactDOM.findDOMNode(this.refs.author).value;
        let text = ReactDOM.findDOMNode(this.refs.text).value;
        alert(author + '\n' + text);
    };
    render () {
        let agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty;
    return (
        <form className='add cf'>
            <input
                type='text'
                className='add__author'
                defaultValue=''
                placeholder='Ваше имя'
                onChange={this.onAuthorChange}
                ref='author'
            />
            <textarea
                className='add__text'
                defaultValue=''
                placeholder='Текст новости'
                onChange={this.onTextChange}
                ref='text'
            ></textarea>
            <label className='add__checkrule'>
                <input type='checkbox'
                       defaultChecked={false}
                       ref='checkrule'
                       onChange={this.onCheckRuleClick}
                />Я согласен с правилами
            </label>
            <button
                className='add__btn'
                onClick={this.onBtnClickHandler}
                ref='alert_button'
                disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>
                Добавить новость
            </button>
        </form>
    )
    }
}

export default AddNews;