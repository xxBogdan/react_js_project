import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});
bridge.subscribe((e) => console.log(e));

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);
