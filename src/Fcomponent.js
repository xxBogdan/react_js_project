import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Articles from './Articles';

export default function Fcomponent(props) {
  return (
    <span>
        <div>
          <img src="https://raw.githubusercontent.com/orcuntuna/react-turkce-kaynak/master/images/giris.jpeg" height="40%" width="40%"/>
        </div>
          {props.name}
    </span>
  )
}
