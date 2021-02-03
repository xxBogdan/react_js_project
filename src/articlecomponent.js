import React, { Component } from "react";
import './articlecomponent.css';

class ArticleComponent extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {
			title: "",
			created: "",
			content: "",
			isJson: false
		};
	}
	
	postQuery(url)
	{
		return fetch(url, { method: "GET", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, }).then((response) => 
		{ 
			const contentType = response.headers.get("content-type"); 
			
				if (contentType && contentType.indexOf("application/json") !== -1) 
				{
					this.setState({ isJson: true });
					return response.json() 
				} 
				
				else 
				{ 
					return response.text() 
				}
		});
	}
	
	componentDidMount() 
	{
		var id = this.props.match.params.id;
		const fetchUrls = async () => {
			await this.postQuery('http://wordpress/wp-json/wp/v2/posts/'+id).then(response => 
			{
				if(this.state.isJson)
				{
					this.setState({ created: response.date });
					this.setState({ content: response.content.rendered });
					this.setState({ title: response.title.rendered });
				}
			})
		};
		fetchUrls();
	}

	render() 
	{
    return (
      <div className="article_component">
				<div className="article_header">
					<div className="article_header_center">
						{ this.state.title === "" ? <span>Загрузка названия статьи</span> : <span>{ this.state.title }</span> }
					</div>
					<div className="article_header_right">
				    { this.state.created === "" ? <span>Загрузка даты создания</span> : <span className="created">Сатья создана: {this.state.created} </span> }
					</div>
				</div>
					{ this.state.content === "" ? <div className="article_content"><span>Загрузка контента</span></div> : <div className="article_content" dangerouslySetInnerHTML={{__html: this.state.content}}></div> }
				<div className="article_footer">
					<button class="button" onClick={event =>  window.location.href='/#/articles'}>Другие статьи</button>
				</div>
      </div>
    );
  }
}

export default ArticleComponent;