import React from 'react';
import Next from "./Next";

const ContexAdvertisement = (props) => {
    return (
        <div id="ContexAdvertisement" style={{backgroundColor: props.bgColor}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body py-0">
                                <div className="row align-items-center">
                                    <div className="col-5">
                                        <div className="card border-0 bg-transparent py-0">
                                            <div className="card-body d-flex justify-content-center py-3">
                                                <img src="googl.png" alt="" className=""/>
                                                <img src="yandeks.png" alt="" className=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 px-0">
                                        <div className="card border-0 bg-transparent pr-0 pl-4">
                                            <div className="card-body d-flex justify-content-between pr-0">
                                                <div className="">
                                                    <h3>Контекстная реклама</h3>
                                                    <p className="text-secondary">Реклама вашего сайта</p>
                                                </div>
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
};

export default ContexAdvertisement;