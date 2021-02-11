import React, {useState} from 'react';
import CheckboxForContent from "./CheckboxForContent";
import {Modal} from "reactstrap";

const AdminPanel = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div id="AdminPanel">
            <div className="container">
                <div className="row" style={{marginBottom: props.marginBottom}}>
                    <div className="col-12">
                        <div className="card border-0">
                            <div className="card-header border-bottom-0 d-flex align-items-center">
                                <h3 className="mb-0"><span>4. </span> Админ панель

                                    <span> сайта </span></h3>
                                <img src="VectorInfo.png" alt="" className="ml-3" onClick={toggle}/>
                            </div>

                            <div className="card-body py-0">
                                <div className="row justify-content-between mt-4 px-3">
                                    <div>
                                        <div className="card border-0">
                                            <div className="card-body py-0 px-3">
                                                <CheckboxForContent number="Не нужен" id="adminPanel1"
                                                                    idLabel="IdAdminOne"
                                                                    textSize="36px" class="d-none" classText="pl-3"
                                                                    classTextTwo="pl-3" classBrouser="d-none"
                                                                    classForLabel="pr-5"/>
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <CheckboxForContent image="WordPress.png"
                                                                    id="Word" idLabel="Press"
                                                                    textSize="36px" classText="pl-3"
                                                                    classTextTwo="pl-3" class="d-none"
                                                                    text1="5,16% сайтов в мире" classBrouser="d-none"
                                                                    classForLabel="pr-5"/>
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <CheckboxForContent image="1c.png" id="Bitriks"
                                                                    idLabel="1c"
                                                                    textSize="36px" classText="pl-3" class="d-none"
                                                                    text1="50,23% сайтов в мире" classImage="mt-3"
                                                                    classBrouser="d-none" classForLabel="pr-5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

            <Modal isOpen={modal} toggle={toggle} id="modalAdmin">

                <div id="ModalForAdmin">
                    <div className="d-flex">
                        <div className="col-5 px-0">
                            <img src="AdminImage1.png" alt=""/>
                            <img src="Admin2.png" alt=""/>
                        </div>

                        <div className="col-7 mt-5">
                            <div className="card border-0">
                                <div className="card-header bg-transparent border-bottom-0 pb-0">
                                    <h3 className="mb-0">Админ панель</h3>
                                </div>

                                <div className="card-body pt-0">
                                    <div className="d-flex justify-content-between my-3">
                                        <img src="WordPress.png" alt=""/>
                                        <img src="1c.png" alt="" className=""/>
                                    </div>

                                    <p className="pr-5">CMS (Система управление контентом) вашего сайта на платформах WordPress и
                                        Bitrix. </p>

                                </div>

                                <div className="card-footer border-top-0 bg-transparent mt-3 mb-3">
                                    <button className="btn btn-light d-flex align-items-center" onClick={toggle}>
                                        <img src="VectorX.png" alt=""/><span
                                        className="ml-3 pb-2 text-secondary"> закрыть </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Modal>
        </div>
    );
};

export default AdminPanel;