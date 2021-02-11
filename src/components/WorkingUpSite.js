import React from 'react';
import Next from "./Next";

const WorkingUpSite = (props) => {
    return (
        <div id="WorkingUpSite" className={props.className} style={{backgroundColor: props.color1}}>
            <div className={`container ${props.className}`}>
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body py-0">
                                <div className="row align-items-center">
                                    <div className="col-5">
                                        <div className="card border-0 bg-transparent">
                                            <div className="card-body p-0 d-flex">
                                                <img src="WorkingUp.png" alt="" className="pt-1"/>
                                                <img src="landing 1.png" alt="" className=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 px-0">
                                        <div className="card border-0 bg-transparent">
                                            <div className="card-body pr-0 pl-5">
                                                <h3>Разработка сайта</h3>
                                                <div className="d-flex align-items-center">
                                                    <button className={`btn text-white border-0 ${props.class}`}
                                                            style={{backgroundImage: "linear-gradient(90deg, " +
                                                                    props.colorOne + ',' + props.colorTwo + ")"}}>Сайт визитка
                                                    </button>
                                                    <p className={`mb-0 ${props.textColor}`}>{props.text} <span > {props.cost} </span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-1">
                                        <Next link={props.linkPage}/>
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

export default WorkingUpSite;