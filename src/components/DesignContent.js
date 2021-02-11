import React, {useState} from 'react';
import CheckboxForContent from "./CheckboxForContent";


const DesignContent = (props) => {
    const [compModal, setCompModal] = useState(false);
    const [compModal2, setCompModal2] = useState(false);
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
                            <button className="btn btn-light d-flex align-items-center"
                                    onClick={() => setCompModal(false)}>
                                <img src="VectorX.png" alt=""/><span
                                className="ml-3 pb-2 text-secondary"> закрыть </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const premium = (
        <div id="PremiumModal">
            <div className="d-flex" style={{backgroundImage: "url(bg_portfolio.png)", backgroundPositionY: -88}}>
                <div className="col-7 px-0">

                </div>
                <div className="col-5 px-0">
                    <div className="card border-0 mt-3 bg-transparent">
                        <div className="card-header bg-transparent border-bottom-0">
                            <h3>Премиум
                                дизайн</h3>
                            <img src="star.png" alt=""/>
                        </div>

                        <div className="card-body px-3">
                            <p>Только <span className="font-weight-bold">
                                лучшие специалисты </span>
                                изготовят Вам дизайн, который будет премиум качества!

                            </p>
                        </div>

                        <div className="card-footer border-top-0 bg-transparent mt-2 mb-3">
                            <button className="btn btn-light d-flex align-items-center"
                                    onClick={() => setCompModal2(false)}>
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
        <div id="DesignContent">
            <div className="container">
                <div className="row" style={{marginBottom: props.marginBottom}}>
                    <div className="col-12">
                        <div className="card border-0">
                            <div className="card-header border-bottom-0">
                                <h3><span>2. </span> Дизайн
                                    <span> сайта </span></h3>
                            </div>

                            <div className="card-body py-0">
                                <div className="row justify-content-between mt-3 px-3">
                                    <div>
                                        <div className="card border-0">
                                            <div className="card-body py-0 px-3">
                                                <CheckboxForContent number="Шаблон" id="shablon" idLabel="IdShablon"
                                                                    text1="Дизайн по " text2="готовому шаблону"
                                                                    textSize="36px" class="d-none" classText="pl-3"
                                                                    classTextTwo="pl-3" classBrouser="d-none"
                                                                    classForLabel="pr-5"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <CheckboxForContent number="Уникальный" number1="дизайн"
                                                                    id="unikal" idLabel="IdUnique"
                                                                    textSize="36px" classText="pl-3"
                                                                    classTextTwo="pl-3" modalForDesign={unique}
                                                                    classImage="d-none" classBrouser="d-none"
                                                                    classForLabel="pr-5"
                                                                    customClose={true}
                                                                    changeModal={setCompModal}
                                                                    modalVisible={compModal}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <CheckboxForContent number="Премиум" number1="дизайн" id="Premium"
                                                                    idLabel="IdPremium"
                                                                    textSize="36px" classText="pl-3"
                                                                    modalForDesign={premium}
                                                                    classImage="d-none" classBrouser="d-none"
                                                                    classForLabel="pr-5"
                                                                    customClose={true}
                                                                    changeModal={setCompModal2}
                                                                    modalVisible={compModal2}/>
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

export default DesignContent;