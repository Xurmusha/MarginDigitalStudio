import React from 'react';
import {Link} from "react-router-dom";

const Next = (props) => {
    return (
        <div id="Next">
            <div className="d-flex justify-content-end align-items-center">
                <div className="card border-0 bg-transparent">
                    <div className="card-body">
                        <Link to={props.link}>
                            <button
                                className="btn d-flex justify-content-center align-items-center">
                                <img src="Vector.png" alt=""/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Next;