import React from 'react';
import {Link} from "react-router-dom";
import Next from "./Next";

const SMMContent = (props) => {
    return (
        <div id="Parts" className={props.className} style={{backgroundColor: props.color1}}>
            <div className={`container ${props.className}`}>
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body py-0">
                                <div className="row align-items-center">
                                    <div className="col-5">
                                        <div className="card border-0 bg-transparent">
                                            <div className="card-body py-0">
                                                <img src="smm 1.png" alt="" className=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="card border-0 bg-transparent">
                                            <div className="card-body">
                                                <h3>SMM продвижение</h3>
                                                <div className="d-flex align-items-center">
                                                    <button className={`btn text-white border-0 ${props.class}`}
                                                            style={{backgroundImage: "linear-gradient(90deg, " + props.colorOne + ',' + props.colorTwo + ")"}}>
                                                        {props.btnText}
                                                    </button>
                                                    <p className={`mb-0 ${props.classColor}`}> {props.text}  <span> {props.number} </span> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   <div className="col-1">
                                       <Next link="/ChooseCategory"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SMMContent;