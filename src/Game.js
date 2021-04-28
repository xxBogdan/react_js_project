import React, { Component } from "react";
import queryString from 'query-string';
import './game.css';

class Game extends Component {
	constructor(props) {
		super(props);
        this.urlClick ="http://wordpress/wp-json/myapi/game";
        this.timerActive="";
		this.numberAttempts = 3;
        this.boxClass = ["","","","","","","","","","","","","","","","","","","","","","","","","", 
        ];
        this.state = {
            boxClass: this.boxClass
        }
		this.handleClick = this.handleClick.bind(this);
	}

    handleClick = (e) => {

        let user_id = localStorage.getItem('user');
        let number_cell = e.currentTarget.dataset.id;

        e.currentTarget.setAttribute("disabled", "disabled");

        fetch(this.urlClick,{
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: queryString.stringify({user_id:user_id, cell_number:number_cell})
        }).then(function(response) {
            return response.json()
          })
          .then((data) => {
        
            if (data.type_prize === 1) {
                text.innerHTML = data.MESSAGE;
                this.boxClass[number_cell]="win";
                this.numberAttempts--;
            }
            else if (data.type_prize === 2) {
                text.innerHTML = data.MESSAGE;
                this.boxClass[number_cell]="draw";
            }
            else if (data.type_prize === 3) {
                text.innerHTML = data.MESSAGE;
                this.boxClass[number_cell]="lose";
                this.numberAttempts--;
                text.innerHTML = "Вы проиграли";
            }
            else {
                window.location.href = 'http://localhost:3000/#/articles';
            }
            
            if (this.numberAttempts === 0) {
                text.innerHTML = "Ваши попытки закончились!";
                return false;
            } 
            else {
                text.innerHTML = "Ваши попытки: " + this.numberAttempts;
                this.setState({boxClass:this.boxClass})
            }
          })

          let text = document.getElementById("notification_text");
          text.innerHTML = "Открывается ячейка подождите несколько секунд ";

          console.log(number_cell);
    }
    
    render() {
        return (
            <div className="games">
                <div className="notification">
                    <p id="notification_text">Выберите ячейку для запуска игры!</p>
                    <p id="attempts"></p>
                </div>
                    <div className="wrapper_space">
                        <div className="line_one">
                            <div className="cell"><button onClick={this.handleClick} data-id="0" className={this.boxClass[0]}><h3>A1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="1" className={this.boxClass[1]}><h3>A2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="2" className={this.boxClass[2]}><h3>A3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="3" className={this.boxClass[3]}><h3>A4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="4" className={this.boxClass[4]}><h3>A5</h3></button></div>
                        </div>
                        <div className="line_two">
                            <div className="cell"><button onClick={this.handleClick} data-id="5" className={this.boxClass[5]}><h3>B1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="6" className={this.boxClass[6]}><h3>B2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="7" className={this.boxClass[7]}><h3>B3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="8" className={this.boxClass[8]}><h3>B4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="9" className={this.boxClass[9]}><h3>B5</h3></button></div>
                        </div>
                        <div className="line_three">
                            <div className="cell"><button onClick={this.handleClick} data-id="10" className={this.boxClass[10]}><h3>C1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="11" className={this.boxClass[11]}><h3>C2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="12" className={this.boxClass[12]}><h3>C3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="13" className={this.boxClass[13]}><h3>C4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="14" className={this.boxClass[14]}><h3>C5</h3></button></div>
                        </div>
                        <div className="line_four">
                            <div className="cell"><button onClick={this.handleClick} data-id="15" className={this.boxClass[15]}><h3>D1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="16" className={this.boxClass[16]}><h3>D2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="17" className={this.boxClass[17]}><h3>D3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="18" className={this.boxClass[18]}><h3>D4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="19" className={this.boxClass[19]}><h3>D5</h3></button></div>
                        </div>
                        <div className="line_five">
                            <div className="cell"><button onClick={this.handleClick} data-id="20" className={this.boxClass[20]}><h3>F1</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="21" className={this.boxClass[21]}><h3>F2</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="22" className={this.boxClass[22]}><h3>F3</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="23" className={this.boxClass[23]}><h3>F4</h3></button></div>
                            <div className="cell"><button onClick={this.handleClick} data-id="24" className={this.boxClass[24]}><h3>F5</h3></button></div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Game;
