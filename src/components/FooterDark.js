import React from 'react';
import {Link} from "react-router-dom";
import Next from "./Next";

const FooterDark = (props) => {
    return (
        <div id="footerDark">
            <div className={`row ${props.Class}`}>
                <div className="col-6 px-0">
                    <Link to={props.Link}>
                        <div className="card border-0">
                            <div className="card-body d-flex justify-content-center align-items-center px-0">
                                <img src="payment.png" alt="" className="cost"/>

                                <div className="ml-4">
                                    <p>Общая стоимость:</p>
                                    <h3 className="text-white">12 400 000 сум</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-6 px-0">
                    <Link to="">
                        <div className="card border-0">
                            <div className="card-body d-flex justify-content-center align-items-center px-0">
                                <img src="waranty.png" alt="" className="agreement"/>
                                <h2>Договор</h2>
                                <div className="mt-5 ml-2">
                                    <Next/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 px-0">
                    <div className="card border-0">
                        <div className="card-body d-flex align-items-center justify-content-center px-0">
                            <img src="Margin.png" alt="" className="my-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterDark;