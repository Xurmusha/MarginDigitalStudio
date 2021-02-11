import React from 'react';
import {FormGroup, Label} from "reactstrap";

const Brousers = (props) => {
    return (
        <div id="brouser">
                <FormGroup check>
                    <Label check className={`custom-check-3 d-flex ${props.Class}`} for={props.id}>
                        <input name="formBrouser" type="radio" id={props.id}/>
                        <span></span>
                        <p className="mb-0 ml-5"> {props.nameBrouser} </p>
                    </Label>
                </FormGroup>
        </div>
    );
};

export default Brousers;