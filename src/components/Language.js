import React, {Component} from 'react';
import {Form, Label, Input, FormGroup} from "reactstrap";


class Language extends Component {

    render() {

        function drawBorderUz() {
            document.getElementById('uz').style.borderColor="#E25725";
            document.getElementById('uz').style.backgroundColor="#ffffff";

        }
        function drawBorderEn() {
            document.getElementById('en').style.borderColor="#E25725";
            document.getElementById('en').style.backgroundColor="#ffffff";

        }
        function drawBorderRu() {
            document.getElementById('ru').style.borderColor="#E25725";
            document.getElementById('ru').style.backgroundColor="#ffffff";
        }

        return (
            <div id="Languages">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card border-0">
                                <div className="card-body d-flex align-items-center ml-4 ">
                                    <div className="mr-5">
                                        <h3 className="mb-0">Языки</h3>
                                        <p className="mb-0"> контента</p>
                                    </div>
                                    <button className="btn p-0 shadow-none" id="ru">
                                        <Form>
                                            <FormGroup check className="pl-0">
                                                <Label check className="custom-check" for="RU">
                                                    <img src="ru-1 1.png" alt="" className=""/>
                                                    <input type="radio" id="RU" onClick={drawBorderRu}/>
                                                    <span className="ml-3 mr-5"></span>
                                                    <h5 className="mb-0">RU</h5>
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </button>


                                    <button className="btn p-0 shadow-none" id="uz">
                                        <Form className="">
                                            <FormGroup check className="pl-0">
                                                <Label check className="custom-check" for="UZ">
                                                    <img src="flag 1.png" alt="" className=""/>
                                                    <input type="radio" id="UZ" onClick={drawBorderUz}/>
                                                    <span className="ml-3 mr-5"></span>
                                                    <h5 className="mb-0">UZ</h5>
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </button>

                                    <button className="btn p-0 shadow-none" id="en">
                                        <Form>
                                            <FormGroup check className="pl-0">
                                                <Label check className="custom-check" for="EN">
                                                    <img src="USA.png" alt="" className=""/>
                                                    <input type="radio" id="EN" onClick={drawBorderEn}/>
                                                    <span className="ml-3 mr-5"></span>
                                                    <h5 className="mb-0">EN</h5>
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Language;