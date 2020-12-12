import React, {Component} from 'react';
import Fcomponent from './Fcomponent'

class Articles extends Component {
    render() {
        return (
            <div>
                <h2>Статьи</h2>
                <p class="all_link"><a href="#1">Link1</a></p>
                <p class="all_link"><a href="#2">Link2</a></p>
                <p class="all_link"><a href="#3">Link3</a></p>
                <h1><Fcomponent name="Вы открыли раздел статьи!"/></h1>
            </div>
        );
    }
}

export default Articles;
