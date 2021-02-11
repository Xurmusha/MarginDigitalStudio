import React from 'react';

const FinanceAdvertisement = (props) => {
    return (
        <div id="Finance" style={{backgroundColor: props.bgColor}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body py-0">
                                <div className="row">
                                    <div className="col-5 d-flex justify-content-center align-items-center pl-5">
                                        <div className="card border-0 bg-transparent">
                                            <div className="card-body">
                                                <img src="dlf 1.png" alt="" className=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 d-flex align-items-center">
                                        <div className="card border-0 bg-transparent">
                                            <div className={`card-body d-flex flex-column ${props.class}`}>
                                                <h3>Рекламный бюджет</h3>
                                                <p className={`mb-0 ${props.classColor}`} style={{color: props.color}}> {props.cost} </p>
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
};

export default FinanceAdvertisement;