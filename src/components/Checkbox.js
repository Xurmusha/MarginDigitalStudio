import React from 'react';

const Checkbox = (props) => {

    return (
        <div id="Checkbox">
            <label htmlFor={props.id} className="input-label mx-2">

                <div className="d-flex">
                    <input type="radio" id={props.id} className=""/>
                    <h2 className="input-text d-block" style={{
                        fontSize: props.textSize,
                    }}> {props.number}</h2>
                </div>
                <p className="mb-0 px-3"> {props.text1} </p>
                <p className="mb-0 px-3"> {props.text2} </p>
            </label>
        </div>
    );
};

export default Checkbox;