import React, {useState} from 'react';
import CheckboxForContent from "./CheckboxForContent";
import {Modal} from "reactstrap";

const VersionSite = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div id="VersionSite">
            <div className="container">
                <div className="row" style={{marginBottom: props.marginBottom}}>
                    <div className="col-12">
                        <div className="card border-0">
                            <div className="card-header border-bottom-0 d-flex align-items-center">
                                <h3 className="mb-0"><span>3. </span> Вёрстка


                                    <span> сайта </span></h3>
                                <img src="VectorInfo.png" alt="" className="ml-3" onClick={toggle}/>
                            </div>

                            <div className="card-body pt-0 ">
                                <div className="row justify-content-between mt-4 px-3">
                                    <div>
                                        <div className="card border-0">
                                            <div className="card-body py-0 px-3">
                                                <CheckboxForContent number="Стандартная" number1="вёрстка" id="standart"
                                                                    idLabel="version"
                                                                    textSize="36px" class="d-none" classText="pl-3"
                                                                    classTextTwo="pl-3" classBrouser="d-none"
                                                classForLabel="pr-5"/>
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <CheckboxForContent
                                                    number="Кроссбраузерная вёрстка"
                                                    id="cross" idLabel="brauzer"
                                                    textSize="36px" classText="pl-3"
                                                    classTextTwo="pl-3" class="d-none" classForLabel="pr-5"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

            <Modal isOpen={modal} toggle={toggle} id="modalVersion">

                <div id="ModalForVersion">
                    <div className="d-flex">
                        <div className="col-5 px-0">
                            <img src="Version.png" alt=""/>
                        </div>

                        <div className="col-7 mt-4">
                            <div className="card border-0">
                                <div className="card-header bg-transparent border-bottom-0 pb-0">
                                    <h3 className="mb-0">Вёрстка сайта</h3>

                                    <button className="btn btn-light d-flex align-items-center" onClick={toggle}>
                                        <img src="VectorX.png" alt=""/><span
                                        className="ml-3 pb-2 text-secondary"> закрыть </span>
                                    </button>
                                </div>

                                <div className="card-body pb-0 pt-2">

                                    <p className=""> <span className="font-weight-bold"> Front-end </span>
                                        — программирование внешнего отображения и интерактивных элементов сайта.</p>

                                    <p className="mb-0"> т.е. перевод Дизайна в HTML5 Код</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Modal>
        </div>
    );
};

export default VersionSite;