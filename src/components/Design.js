import React, {Component} from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";
import Checkbox from "./Checkbox";
import CheckboxForContent from "./CheckboxForContent";

class Design extends Component {


    render() {
        const unique = (
            <div id="UniqueModal">
                <div className="d-flex">
                    <div className="col-6 px-0">
                        <img src="img_2 1.png" alt="" className="w-100"/>
                    </div>
                    <div className="col-6">
                        <div className="card border-0 mt-3">
                            <div className="card-header bg-transparent border-bottom-0">
                                <h3>Уникальный </h3>
                                <h3>дизайн </h3>
                            </div>

                            <div className="card-body pr-5">
                                <p className="pr-3">Ваш бренд будет иметь актуальный дизайн обязательно с <span
                                    className="font-weight-bold">
                                авторскими правами</span>
                                </p>
                            </div>

                            <div className="card-footer border-top-0 bg-transparent mt-5">
                                <button className="btn btn-light d-flex align-items-center">
                                    <img src="VectorX.png" alt=""/><span
                                    className="ml-3 pb-2 text-secondary"> закрыть </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <div id="Design">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="card border-0">
                                <div className="card-header border-bottom-0">
                                    <h3><span>1. </span>Дизайн <span>упаковка страниц</span></h3>
                                </div>

                                <div className="card-body pl-0 py-0">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="card border-0">
                                                <div className="card-body p-0">
                                                    <img src="Registration.png" alt="" className="w-100"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-9 mt-3">
                                            <div className="row">
                                                <Checkbox number="0" id="input1"/>
                                                <Checkbox number="9" id="input2"/>
                                                <Checkbox number="12" id="input3"/>
                                                <Checkbox number="24" id="input4" bgColor="rgba(196,196,196,1)"
                                                          color="rgba(188,188,188,1)" radius="10px"/>
                                            </div>

                                            <div className="row mt-2">
                                                <div className="col-5">
                                                    <div className="card border-0">
                                                        <div className="card-body py-0">
                                                            <CheckboxForContent number="Шаблон" id="input5" textSize="36px"
                                                                      text1="Дизайн по" idLabel="shablon" text2="готовому шаблону"
                                                            classText="px-3" classTextTwo="px-3" classBrouser="d-none"
                                                                                classForLabel="pr-5"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="card border-0">
                                                        <div className="card-body py-0">
                                                            <CheckboxForContent number="Уникальный" number1="дизайн" id="input6"
                                                                      textSize="36px" idLabel="dizayn"  classText="px-3"
                                                                                classBrouser="d-none" modalForDesign={unique}
                                                                                classForLabel="pr-5"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Design;