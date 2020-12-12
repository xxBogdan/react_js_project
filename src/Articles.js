import React, {Component} from 'react';
import Fcomponent from './Fcomponent';
import Testpilot from './Testpilot';
import Vangelis from './Vangelis';
import Marticles from './Marticles';
import Decipherment from './Decipherment';
import {Route, NavLink, HashRouter} from 'react-router-dom';

class Articles extends Component {
    render() {
        return (
            <div>
            <HashRouter>
                <div>
                    <div className="menu">
                        <NavLink to="/Marticles"><span class="text1">Main</span></NavLink>
                        <NavLink exact to="/Testpilot"><span class="text1">Test Pilot</span></NavLink>
                        <NavLink to="/Vangelis"><span class="text1">Vangelis</span></NavLink>
                        <NavLink to="/Decipherment"><span class="text1">Decipherment</span></NavLink>
                    </div>
                    <div className="content2">
                        <Route exact path="/Marticles" component={Marticles} />
                        <Route path="/Testpilot" component={Testpilot} />
                        <Route path="/Vangelis" component={Vangelis} />
                        <Route path="/Decipherment" component={Decipherment} />
                    </div>
                </div>
            </HashRouter>
                <h4><Fcomponent name="Main Articles"/></h4>
                <p class="par"><i>This is magic content...</i></p>
                <p class="par2"><i>By Poprik Bogdan</i></p>
            </div>
        );
    }
}

export default Articles;
