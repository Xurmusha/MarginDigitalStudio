import React from 'react';

const Www = (props) => {
    return (
        <div id="WWW">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 bg-transparent">
                            <div className="card-body d-flex justify-content-between align-items-center py-0">
                                <h3><span>Отдел</span> {props.major} </h3>
                                <h2 style={{color: props.color}}>{props.major}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Www;