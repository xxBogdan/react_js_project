import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './Home';
import Articles from './Articles';
import Game from './Game';
import Tests from './Tests';
import './style.css';

class Main extends Component {
    render() {
        return (
          <HashRouter>
              <div>
                  <h1>ReactJSRouting</h1>
                  <ul className="header">
                      <li><NavLink exact to="/">Главная</NavLink></li>
                      <li><NavLink to="/Articles">Статьи</NavLink></li>
                      <li><NavLink to="/Game">Игра</NavLink></li>
                      <li><NavLink to="/Tests">Тесты</NavLink></li>
                  </ul>
                  <div className="content">
                      <Route exact path="/" component={Home} />
                      <Route path="/Articles" component={Articles} />
                      <Route path="/Game" component={Game} />
                      <Route path="/Tests" component={Tests} />
                  </div>
              </div>
          </HashRouter>
      );
    }
}

export default Main;
