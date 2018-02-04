import React, { Component } from 'react';

import './News.css';

import Article from './Article';

class News extends Component {

    render() {
        let news = this.props.news;
        let newsTemplate;
        if (news.length > 0) {
            newsTemplate = news.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article news={item} />
                    </div>
                )
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return (
          <div className="news">
              {newsTemplate}
              <strong className={'news__count ' + (news.length > 0 ? '':'none')}>
                  Всего новостей: {news.length}
                  </strong>
          </div>
        );
    }
}

export default News;
