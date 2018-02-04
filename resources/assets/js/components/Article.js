import React, { Component } from 'react';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        };

        this.readMoreClick = this.readMoreClick.bind(this);
    }

    readMoreClick(e) {
        e.preventDefault();
        this.setState({
            visible : true
        });
    };
    render() {
        let author = this.props.news.author;
        let text = this.props.news.text;
        let bigText = this.props.news.bigText;
        let visible = this.state.visible;

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                <a href="#" onClick={this.readMoreClick} className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
                <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
            </div>
        );
    };
}

export default Article;