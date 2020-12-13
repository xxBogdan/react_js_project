import React, {Component} from 'react';
import Fcomponent from './Fcomponent';
import Testpilot from './Testpilot';
import Vangelis from './Vangelis';
import Marticles from './Marticles';
import Decipherment from './Decipherment';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

class Articles extends Component {
    render() {
        return (
            <div>
            <HashRouter>
            <div>
                    <div className="menu">
                        <NavLink to="/Marticles"><span>Main</span></NavLink>
                        <NavLink to="/Testpilot"><span>Test Pilot</span></NavLink>
                        <NavLink to="/Vangelis"><span>Vangelis</span></NavLink>
                        <NavLink to="/Decipherment"><span>Decipherment</span></NavLink>
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
                <p><i>This is magic content...</i></p>
                <p><i>By Poprik Bogdan</i></p>
                <div class="content_block">
                  <p2>Vangelis</p2>
                  <p3>By Poprik Bogdan | 12/11/2019</p3>
                  <h5><NavLink to="/Vangelis"><img src="https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-nochnogo-neba-27.jpg" width="25%" height="25%"/></NavLink></h5>
                  <p4>Test Pilot</p4>
                  <p5>By Poprik Bogdan | 12/11/2019</p5>
                  <h6><NavLink to="/Testpilot"><img src="https://s3-us-west-2.amazonaws.com/cosmicjs/9a1afab0-e206-11e7-b8ae-3589834ee233-pexels-photo-176851.jpeg" width="25%" height="25%"/></NavLink></h6>
                  <p6>Decipherment</p6>
                  <p7>By Poprik Bogdan | 12/11/2019</p7>
                  <h7><NavLink to="/Decipherment"><img src="https://cosmic-s3.imgix.net/c8d91560-e23a-11e7-83f8-35edfb842774-pexels-photo-705675.jpeg" width="15%" height="15%"/></NavLink></h7>
                </div>
            </div>
        );
    }
}

export default Articles;
