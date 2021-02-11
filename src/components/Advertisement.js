import React, {Component} from 'react';
import Checkbox from "./Checkbox";

class Advertisement extends Component {
    render() {
        return (
            <div id="Advertisement">
                <div className="container">
                    <div className="row" style={{marginBottom: 1500}}>
                        <div className="col-12">
                            <div className="card border-0">
                                <div className="card-header border-bottom-0">
                                    <h3><span>2. </span>Реклама <span>сайта</span></h3>
                                </div>

                                <div className="card-body py-0">
                                    <div className="row align-items-center">
                                        <div className="col-5 pr-0">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body pr-0">
                                                    <h3 className="mb-0">Охват аудитории</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-7 mt-3 pl-0">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body d-flex align-items-center pl-0">
                                                    <input type="text" className="pl-3" min="0"/>

                                                    <h3 className="mb-0 ml-3">просмотров</h3>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row align-items-center pb-4">
                                        <div className="col-5 pr-0 ">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body pr-0 py-0 d-flex">
                                                    <h3 className="mb-0">Лидогенерация</h3>
                                                    <img src="VectorInfo.png" alt="" className="mx-4"/>
                                                    <p className="">от</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-7 pl-0">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body d-flex align-items-center pl-0 py-0">
                                                    <input type="text" className="pl-3" min="0"/>

                                                    <p className="mx-3">  до </p>

                                                    <input type="text" className="pl-3 inputTwo" min="0"/>

                                                    <h3 className="mb-0 ml-3">заявок</h3>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="card-footer border-top-0">
                                    <div className="row">
                                        <div className="col-5 d-flex pl-5">
                                            <img src="dlf 1.png" alt=""/>
                                            <h2 className="ml-5">Рекламный
                                                бюджет</h2>
                                        </div>

                                        <div className="col-7 pl-0 d-flex align-items-center">
                                            <label htmlFor="advC" className="d-flex align-items-center">
                                                <input type="text" id="advC" className=""/>
                                                <span className="ml-3">сум</span>
                                            </label>

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

export default Advertisement;