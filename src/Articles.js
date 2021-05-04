import React, { Component } from "react";
import './articlecomponent.css'

class Articles extends Component {
      
    constructor(props) {
      super(props);
      this.state = {
        urls: [],
        isLoading: true,
        isJson: false
      };
    }
  
    postQuery(url){
      return fetch(url, { method: "GET", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, }).then((response) => { 
        const contentType = response.headers.get("content-type"); 
          if (contentType && contentType.indexOf("application/json") !== -1) {
            this.setState({ isJson: true });
            return response.json() 
          } else { 
            return response.text() 
          }
        });
    }
    
    componentDidMount() {
      const fetchUrls = async () => {
        await this.postQuery(templateUrl + '/wp-json/wp/v2/posts' + id).then(response => {
          let array = [];
          if(this.state.isJson && response instanceof Array && response.length > 0){
            for(var i = 0; i < response.length; i++){
              var url = [response[i].title.rendered, "/#/articlecomponent/"+response[i].id]
              array.push(url);
            }
          }
          this.setState({ urls: array });
          this.setState({ isLoading: false });
        })
      };
      fetchUrls();
    }
    
    render() {
      return (
        <div className="articles">
          {
            this.state.urls.length > 0 ? this.state.urls.map((result, i) => ( <a className="articles_style" key={i} href={result[1]}>{result[0]}</a> )) : this.state.isLoading ? <span>Загрузка статей</span> : <span>Статей нет</span>
          }
        </div>
      );
    }
  }
  
export default Articles;
