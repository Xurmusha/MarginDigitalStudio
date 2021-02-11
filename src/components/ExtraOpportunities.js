import React from 'react';
import CheckboxForContent from "./CheckboxForContent";

const ExtraOpportunities = () => {
    return (
        <div id="Opportunity">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="my-3">
                            <p>Дополнительные возможности:</p>
                        </div>
                        <div className="card border-0">
                            <div className="card-header border-bottom-0 d-flex align-items-center bg-dark">
                                <h3 className="text-white mb-0 py-3 ml-4">Фото / Видео сессия</h3>
                            </div>

                            <div className="card-body pt-0 ">
                                <div className="row justify-content-between mt-4 px-3">
                                    <div className="col-8">
                                        <div className="card border-0">
                                            <div className="card-body py-0">

                                                <p className="pr-3 mb-0">Живым фото и видео доверяют в 104% больше чем просто
                                                    контенту из интернета. </p>
                                                <p className="mb-0"> Оператор снимет ваш:</p>

                                                <p className="pr-5"><span
                                                    className="font-weight-bold"> офис/товары/производство/цех </span>
                                                    или <span className="font-weight-bold"> услуги
                                                    на лучшую профессиональную камеру</span> для
                                                    Узбекистана на 2020 год.</p>
                                                <div className="d-flex">
                                                    <CheckboxForContent number="Не нужна" id="mustNot"
                                                                        idLabel="cannot"
                                                                        textSize="36px" class="d-none"
                                                                        classBrouser="d-none" classImage="d-none"/>

                                                    <CheckboxForContent number="2 часа съёмки" id="two"
                                                                        idLabel="hour"
                                                                        textSize="36px" class="d-none"
                                                                        classBrouser="d-none"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4 px-0">
                                        <img src="foto.png" alt=""/>
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

export default ExtraOpportunities;