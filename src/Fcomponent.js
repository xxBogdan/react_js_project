import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Game from './Game';

export default function Fcomponent(props) {
  return (
    <span>
        <div>
          <Link exact to="/Game"><img src="https://raw.githubusercontent.com/orcuntuna/react-turkce-kaynak/master/images/giris.jpeg" height="40%" width="40%" class="img_text"/></Link>
        </div>
        {props.name}
    </span>
  )
}
