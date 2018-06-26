import React from "react";
import "./Header.css";


const Header = props => (
    <header>
        <div className="jumbotron jumbotron-fluid bg-dark text-light header">
            <div className="container">
                <h1 className="display-4">The Office Clicky Game</h1>
                <p className="lead"></p>
            </div>
        </div>
    </header>
)

export default Header;