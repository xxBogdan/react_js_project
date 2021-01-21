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
                  <h1>ReactJavaScript</h1>
                  <ul className="header">
                      <li><NavLink exact to="/"><span>Главная</span></NavLink></li>
                      <li><NavLink to="/Articles"><span>Статьи</span></NavLink></li>
                      <li><NavLink to="/Game"><span>Игра</span></NavLink></li>
                      <li><NavLink to="/Tests"><span>Тесты</span></NavLink></li>
                  </ul>
                  <div className="content">
                      <Route exact path="/" component={Home} />
                      <Route path="/Articles" component={Articles} />
                      <Route path="/Game" component={Game} />
                      <Route path="/Tests" component={Articles} />
                  </div>
              </div>
          </HashRouter>
      );
    }
}

export default Main;
