import React, { Component } from "react";
import './main.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Articles from "./articles";
import Tests from "./tests";
import Game from "./game";
import ArticleComponent from "./articlecomponent";

class Main extends Component {
	render() {
    return (
	<HashRouter>
        <div className="main">
			<div className="header">
				<span><NavLink to="/articles">Статьи</NavLink></span>
				<span><NavLink to="/tests">Тесты</NavLink></span>
				<span><NavLink to="/game">Игра</NavLink></span>
				<span><NavLink to="/articlecomponent">Компонент</NavLink></span>
			</div>
			<div className="content">
				 <Route path="/articles" component={Articles}/>
				 <Route path="/tests" component={Tests}/>
				 <Route path="/game" component={Game}/>
				 <Route path="/articlecomponent/:id" component={ArticleComponent}/>
			</div>
        </div>
	</HashRouter>
    );
  }
}

export default Main;