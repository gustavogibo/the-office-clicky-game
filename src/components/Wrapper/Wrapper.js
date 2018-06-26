import React from "react";
import "./Wrapper.css";

const Wrapper = props =>
    <div className="container">
        <div className="row d-flex justify-content-center">
            {props.children}
        </div>
    </div>;

export default Wrapper;
