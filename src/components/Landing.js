import React from 'react';
import {Form, FormGroup, Label} from "reactstrap";

const Landing = (props) => {
    return (
        <div id="Landing">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 ">
                        <div className={`card border-0 ${props.class}`}>
                            <div className="card-body py-2">
                                <div className="row">
                                    <div
                                        style={{backgroundImage: "linear-gradient(90deg, " + props.color1 + ',' + props.color2 + ")"}}
                                        className="form w-100 p-0 text-white" onClick={() => {props.history.push("/landing")}}>
                                        <FormGroup check>
                                            <Label check className={`custom-check ${props.Class}`} for={props.id}>
                                                <input name="form" type="radio" id={props.id}/>
                                                <span></span>
                                                <div className="d-flex ml-2">
                                                    <div className="col-3 d-flex align-items-center">
                                                        <div className="card bg-transparent border-0">
                                                            <div className="card-body d-flex px-0">
                                                                <div
                                                                    className="d-flex flex-column justify-content-center">
                                                                    <p className="mb-0"> {props.for} </p>
                                                                    <h6 className="mb-0"> {props.nameOfSite} </h6>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-4 ">
                                                        <div className="row">
                                                            <div className="col-12 px-0 d-flex align-items-center justify-content-between">
                                                                <div className="card border-0 bg-transparent">
                                                                    <div className="card-body px-0">
                                                                        <p className="mb-0">
                                                                            {props.info}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-5 px-0">
                                                        <div className="card border-0 bg-transparent">
                                                            <div className="card-body pb-0 pt-5">
                                                                <img src="landing 1.png" alt="" className=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Label>
                                        </FormGroup>
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

export default Landing;