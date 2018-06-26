import React from "react";
import "./Header.css";


const Header = props => (
    <header>
        <div className="jumbotron jumbotron-fluid bg-dark text-light header">
            <div className="container">
                <h1 className="display-4">The Office Clicky Game</h1>
                <h2 className="text-light" ><p className="lead"> Score : {props.score} | High Score: {props.high_score}</p></h2>
                <h3>{props.message}</h3>
            </div>
        </div>
    </header>
)

export default Header;