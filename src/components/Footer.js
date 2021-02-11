import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
    return (
        <div id="footer">
            <div className={`row ${props.Class}`}>
                <div className="col-6 px-0">
                    <Link to={props.linkPrev}>
                        <div className="card border-0">
                            <div className="card-body d-flex justify-content-center align-items-center px-0">
                                <button className="btn bg-transparent border-0 shadow-none" type="button">
                                    <span className=""><img src="Vector (4).png" alt="" className="mr-3"/>назад</span>
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-6 px-0">
                    <Link to={props.link}>
                        <div className="card border-0">
                            <div className="card-body d-flex justify-content-center align-items-center px-0">
                                <button
                                    className="btn bg-transparent border-0 shadow-none d-flex align-items-center justify-content-center"
                                    type="button">
                                    <img src="Vector (3).png" alt="" className="mr-3"/>
                                    <span className="pt-2">Главная</span>
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 px-0">
                    <div className="card border-0">
                        <div className="card-body d-flex align-items-center justify-content-center px-0">
                            <img src="MarginDigital.png" alt="" className="my-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;