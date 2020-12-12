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
                      <li2><NavLink exact to="/"><span>Главная</span></NavLink></li2>
                      <li2><NavLink to="/Articles"><span>Статьи</span></NavLink></li2>
                      <li2><NavLink to="/Game"><span>Игра</span></NavLink></li2>
                      <li2><NavLink to="/Tests"><span>Тесты</span></NavLink></li2>
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
