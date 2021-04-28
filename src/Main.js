import {Route, NavLink, HashRouter} from 'react-router-dom';
import React, {Component} from 'react';
import Home from './Home';
import Articles from './Articles';
import Game from './Game';
import Tests from './Tests';
import ArticleComponent from "./articlecomponent";
import './style.css';
import qs from 'querystring';

class Main extends Component {
    componentDidMount() {
        const params = window.location.hash.slice(3);
        const paramsAsObject = qs.parse(params);
        let user = paramsAsObject.vk_user_id;
        localStorage.setItem('user', user);

        console.log(paramsAsObject)
    }

    render() {
        return (
          <HashRouter>
              <div>
                  <h1>ReactJavaScript</h1>
                  <ul className="header">
                      <li><NavLink exact to="/"><span>Главная</span></NavLink></li>
                      <li><NavLink to="/articles"><span>Статьи</span></NavLink></li>
                      <li><NavLink to="/game"><span>Игра</span></NavLink></li>
                      <li><NavLink to="/tests"><span>Тесты</span></NavLink></li>
                  </ul>
                  <div className="content">
                      <Route exact path="/" component={Home} />
                      <Route path="/articles" component={Articles} />
                      <Route path="/game" component={Game} />
                      <Route path="/tests" component={Tests} />
                      <Route path="/articlecomponent/:id" component={ArticleComponent} />
                  </div>
              </div>
          </HashRouter>
      );
    }
}

export default Main;
