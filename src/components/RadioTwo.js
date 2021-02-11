import React from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from 'react-router-dom';
import Next from "./Next";

const RadioTwo = (props) => {
    return (
        <div id="RadioTwo">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0">
                            <div className="card-body py-2">
                                <div className="row justify-content-between">
                                    <Form style={{backgroundImage: "linear-gradient(90deg, "+ props.color1 + ',' + props.color2 +")"}} className="w-100">
                                        <FormGroup check>
                                            <Label check className="custom-check" for={props.id}>
                                                <input type="radio" id={props.id}/>
                                                <span></span>
                                                <div className="d-flex">
                                                    <div className="col-5 d-flex">
                                                      <div className="card border-0 bg-transparent">
                                                          <div className="card-body d-flex px-0">
                                                              <div className="d-flex flex-column justify-content-center">
                                                                  <p className="mb-0">{props.for}</p>
                                                                  <h6 className="mb-0"> {props.messenger} </h6>
                                                                  <h6 className="mb-0"> {props.messengertwo} </h6>
                                                              </div>

                                                              <div className="d-flex">
                                                                  <img src={props.url} alt="" className="ml-4"/>

                                                                  <img src={props.urlTwo} alt="" className="ml-3"/>
                                                              </div>

                                                          </div>
                                                      </div>
                                                    </div>

                                                    <div className="col-7 d-flex justify-content-between align-items-center">
                                                        <div className="row">
                                                            <div className="col-8">
                                                                <p className="pl-4">
                                                                    {props.info}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <Next link="/design"/>
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

export default RadioTwo;