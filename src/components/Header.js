import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div id="header" style={{backgroundImage: "linear-gradient(90deg, "+ props.color1  + ',' + props.color2  +")"}}>
            <div className="container">
                <div className={`d-flex justify-content-between align-items-center py-4 px-4 ${props.class}`}>

                    <div className="d-flex align-items-center">
                        <Link to={props.link}>
                            <button className="btn border-0 d-flex align-items-center justify-content-center">
                                <span><img src="Vector (2).png" alt="" className="mr-2"/>назад</span>
                            </button>
                        </Link>

                        <div className="ml-3">
                            <p className="mb-0"> {props.text} </p>
                            <h5 className="mb-0 mt-1"> {props.action} </h5>
                        </div>
                    </div>

                    <h3>{props.cost}</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;






