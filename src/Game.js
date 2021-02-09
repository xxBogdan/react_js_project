import React, { Component } from "react";
import './game.css';

class Game extends Component {

    constructor(props) 
    {
        super(props);
        this.state = {
          min: 1,
          max: 10,
          number: 1
        }
    }

    componentDidMount() 
    {
        this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
    }
       
    generateNumber = (min, max) => 
    {
        return Math.floor(Math.random()*(max-min+1)+min)
    }
       
    getInputs = () => 
    {
        if(this.state.min > this.state.max )
        {
        
          const minTemp = this.state.min
          const maxTemp = this.state.max

          this.setState
          (
            { 
                min: maxTemp,
                max: minTemp
            }, () =>
            this.setState
            ({
              number: this.generateNumber(this.state.min, this.state.max)  
            })
          );
        } 
        
        else 
        {
          this.setState
          ({
            number: this.generateNumber(this.state.min, this.state.max)  
          })
        }

        const min = 1;
        const max = 10;
        const rand = Math.floor(Math.random()*(max-min+1)+min);

        if (rand > 5)
        {
            document.getElementById("notification_text").innerHTML="Вы выиграли!";
        }

        else
        {
            document.getElementById("notification_text").innerHTML="Вы проиграли!";
        }
    }

    /*handleClick = (e) => 
    {
        //e.target.innerHTML = "";
        document.getElementById("notification_text").innerHTML="Кнопка нажата " + e.target.innerHTML;
    }*/

    render() 
    {
        return (
            <div className="games">
                <div className="notification"><p id="notification_text"></p></div>
                    <div className="wrapper_space">
                        <div className="line_one">
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>{ this.state.number }</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>A2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>A3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>A4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>A5</h3></button></div>
                        </div>
                        <div className="line_two">
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>B1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>B2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>B3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>B4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>B5</h3></button></div>
                        </div>
                        <div className="line_three">
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>C1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>C2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>C3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>C4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>C5</h3></button></div>
                        </div>
                        <div className="line_four">
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>D1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>D2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>D3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>D4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>D5</h3></button></div>
                        </div>
                        <div className="line_five">
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>F1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>F2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>F3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>F4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} onClick={ this.getInputs }><h3>F5</h3></button></div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Game;
