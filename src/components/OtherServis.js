import React, {Component} from 'react';
import Next from "./Next";

class OtherServis extends Component {
    render() {
        return (
            <div id="OtherServis" style={{backgroundColor: 'rgba(244,244,244,1)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body py-0">
                                    <div className="row align-items-center">
                                        <div className="col-5">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body d-flex justify-content-center">
                                                    <img src="music 1.png" alt="" className=""/>
                                                    <img src="ideas 1.png" alt="" className="mt-3"/>
                                                    <img src="non-stop 1.png" alt="" className=""/>
                                                    <img src="working-at-home 1.png" alt="" className="mt-3"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 px-0">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body pl-5 pr-0 ">
                                                    <h3>Отдельные услуги</h3>
                                                    <p className="text-secondary">Ещё не выбраны</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-1 pl-0">
                                            <Next btnColor="rgba(222,222,222,1)"/>
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

export default OtherServis;