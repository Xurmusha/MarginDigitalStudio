import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import Next from "./Next";

const Radio = (props) => {
    return (
        <div id="Radio">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={`card border-0 ${props.class}`}>
                            <div className="card-body py-2">
                                <div className="row">
                                    <Form
                                        style={{backgroundImage: "linear-gradient(90deg, " + props.color1 + ',' + props.color2 + ")"}}
                                        className="w-100">
                                        <FormGroup check>
                                            <Label check className={`custom-check ${props.Class}`} for={props.id}>
                                                <input type="radio" id={props.id}/>
                                                <span></span>
                                                <div className="d-flex ml-2">
                                                    <div className="col-4 d-flex align-items-center">
                                                        <div className="card bg-transparent border-0">
                                                            <div className="card-body d-flex px-0">
                                                                <div
                                                                    className="d-flex flex-column justify-content-center">
                                                                    <p className="mb-0"> {props.for} </p>
                                                                    <h6 className="mb-0"> {props.messenger} </h6>
                                                                </div>

                                                                <img src={props.url} alt="" className="ml-3"
                                                                     style={{width: props.width, height: props.height}}/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="col-8 d-flex align-items-center justify-content-between">
                                                        <div className="row">
                                                            <div className="col-9 px-0">
                                                                <div className="card border-0 bg-transparent">
                                                                    <div className="card-body px-0">
                                                                        <p className="mb-0">
                                                                            {props.info}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Next link="/SMMAction"/>
                                                    </div>
                                                </div>

                                            </Label>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Radio;