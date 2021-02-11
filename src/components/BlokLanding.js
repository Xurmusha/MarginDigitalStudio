import React, {useState} from 'react';
import {Modal} from "reactstrap";

const BlokLanding = (props) => {


    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div id="blokLanding">
            <div className="container">
                <div className="row mt-5">

                    <div className="col-12 ">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div>
                                        <img src="block 1.png" alt=""/>
                                    </div>

                                    <div className="col-4">
                                        <div className="card border-0">
                                            <div className="card-header d-flex align-items-center border-bottom-0">
                                                <h3 className="mb-0 mr-3"> Блоков </h3>
                                                <a href="#" onClick={toggle}>
                                                    <img src="VectorInfo.png" alt=""/>
                                                </a>
                                            </div>

                                            <div className="card-body pt-0">
                                                <p>Блоком лендинга считается смысловой блок, по размеру напоминающий экран вашего
                                                    ноутбука / компьютера.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <h4>Количество:</h4>
                                        <input type="text" className="text-center"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Modal isOpen={modal} toggle={toggle} id="modalAdmin">

                <div id="ModalForLandingBloc">

                    <div className="d-flex">
                        <div className="col-5 px-0">
                            <img src="blockLanding.png" alt=""/>
                        </div>

                        <div className="col-7 mt-5">
                            <div className="card border-0">
                                <div className="card-header bg-transparent border-bottom-0 pb-0">
                                    <h3 className="mb-0">Блок лэндинга</h3>

                                    <button className="btn btn-light d-flex align-items-center" onClick={toggle}>
                                        <img src="VectorX.png" alt=""/><span
                                        className="ml-3 pb-2 text-secondary"> закрыть </span>
                                    </button>
                                </div>

                                <div className="card-body pb-0 pt-2">

                                    <p className=""> Блоком лендинга считается смысловой блок, по размеру
                                        напоминающий экран вашего ноутбука/ компьютера.
                                    </p>

                                    <p className="mb-0"> Также <span className="font-weight-bold"> Секция </span> экрана.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Modal>
        </div>
    );
};

export default BlokLanding;