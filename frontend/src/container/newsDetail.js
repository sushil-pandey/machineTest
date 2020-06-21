import React, { Component } from 'react';
import * as newsActions from '../services/news';
import DisplayNewsDetails from "../component/newsDetails";

let id = ''
  class NewsDetailCard extends Component {
    constructor() {
      super();
      let win = window.location.pathname;
      id = win.split('/')[2];
      this.state = {
        newsdetails: {},
        onCreateFlag: false,
      }
    }
    componentDidMount(){

      newsActions.getNews(id ? id : 0).then( data => this.setState({newsdetails: data}));
    }

  
  render(){
    return (<DisplayNewsDetails {...this.state.newsdetails}/>);
  }
 
}

export default NewsDetailCard;