import React, {Component} from 'react';
import './game.css';

class Game extends Component {

    handleClick = () => 
    {
        alert('Поле было активировано!', this);
    }

    render() {
        return (
            <div className="games">
                <div className="notification"><p id="notification_text"></p></div>
                    <div className="wrapper_space">
                        <div className="line_one">
                            <div id="one"><button onClick={() => this.handleClick()}><h3>A1</h3></button></div>
                            <div id="two"><button onClick={() => this.handleClick()}><h3>A2</h3></button></div>
                            <div id="three"><button onClick={() => this.handleClick()}><h3>A3</h3></button></div>
                            <div id="four"><button onClick={() => this.handleClick()}><h3>A4</h3></button></div>
                            <div id="five"><button onClick={() => this.handleClick()}><h3>A5</h3></button></div>
                        </div>
                        <div className="line_two">
                            <div id="one"><button onClick={() => this.handleClick()}><h3>B1</h3></button></div>
                            <div id="two"><button onClick={() => this.handleClick()}><h3>B2</h3></button></div>
                            <div id="three"><button onClick={() => this.handleClick()}><h3>B3</h3></button></div>
                            <div id="four"><button onClick={() => this.handleClick()}><h3>B4</h3></button></div>
                            <div id="five"><button onClick={() => this.handleClick()}><h3>B5</h3></button></div>
                        </div>
                        <div className="line_three">
                            <div id="one"><button onClick={() => this.handleClick()}><h3>C1</h3></button></div>
                            <div id="two"><button onClick={() => this.handleClick()}><h3>C2</h3></button></div>
                            <div id="three"><button onClick={() => this.handleClick()}><h3>C3</h3></button></div>
                            <div id="four"><button onClick={() => this.handleClick()}><h3>C4</h3></button></div>
                            <div id="five"><button onClick={() => this.handleClick()}><h3>C5</h3></button></div>
                        </div>
                        <div className="line_four">
                            <div id="one"><button onClick={() => this.handleClick()}><h3>D1</h3></button></div>
                            <div id="two"><button onClick={() => this.handleClick()}><h3>D2</h3></button></div>
                            <div id="three"><button onClick={() => this.handleClick()}><h3>D3</h3></button></div>
                            <div id="four"><button onClick={() => this.handleClick()}><h3>D4</h3></button></div>
                            <div id="five"><button onClick={() => this.handleClick()}><h3>D5</h3></button></div>
                        </div>
                        <div className="line_five">
                            <div id="one"><button onClick={() => this.handleClick()}><h3>F1</h3></button></div>
                            <div id="two"><button onClick={() => this.handleClick()}><h3>F2</h3></button></div>
                            <div id="three"><button onClick={() => this.handleClick()}><h3>F3</h3></button></div>
                            <div id="four"><button onClick={() => this.handleClick()}><h3>F4</h3></button></div>
                            <div id="five"><button onClick={() => this.handleClick()}><h3>F5</h3></button></div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Game;
