import React, { useState } from 'react';
import {Button, Modal} from "reactstrap";
import Checkbox from "./Checkbox";
import Brousers from "./Brousers";


const CheckboxForContent = (props) => {

    function DrawBorder() {
        document.getElementById(props.idLabel).style.border = "2px solid #E25725";
        document.getElementById(props.idLabel).style.borderRadius = "12px";
        document.getElementById(props.idLabel).style.backgroundColor = "#ffffff";
    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div id="CheckboxContent">
            <label htmlFor={props.id} className={`input-label mx-2 pb-4 ${props.classForLabel}`} id={props.idLabel}>

                <div className="d-flex justify-content-between">


                    <input type="radio" id={props.id} className="" onClick={DrawBorder}/>


                    <h2 className={`input-text d-block mb-0 ${props.classTextBold}`} style={{
                        fontSize: props.textSize}}>
                        {props.number}
                        <h2 className="mb-0"> {props.number1} </h2>
                    </h2>

                    <img src={props.image} alt="" className={props.classImage}/>

                </div>


                <a href="#" onClick={props.customClose ? () => props.changeModal(true) : toggle}>
                    <img src="VectorInfo.png" alt="" className={props.class}/>
                </a>


                <p className={`mb-0 mt-2  ${props.classText} `}><span>{props.textBold1}</span> {props.text1} </p>
                <p className={`mb-0 ${props.classTextTwo}`}><span>{props.textBold2}</span> {props.text2} </p>


                <div className={props.classBrouser}>
                    <form action="" className="d-flex mt-3">
                        <div> <Brousers id={"opera" + Math.random()} nameBrouser="Opera, FireFox"/> </div>
                        <div><Brousers id={"safari" + Math.random()}  nameBrouser="Iphone Safari"/></div>
                        <div><Brousers id={"internetExp" + Math.random()}  nameBrouser="Internet Explorer"/></div>

                    </form>
                </div>

            </label>
            <Modal isOpen={props.customClose ? props.modalVisible : modal}
                   toggle={props.customClose ? () => props.changeModal(false) : toggle}>
                {props.modalForDesign}
            </Modal>
        </div>
    );
};

export default CheckboxForContent;