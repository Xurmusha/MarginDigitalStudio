import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Modal, ModalBody, ModalFooter} from "reactstrap";

class ModalUniqueDesign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    render() {

        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen});
        };

        return (
            <div>
                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm>
                        <ModalBody>

                            {/*<AvField name="firstName" type="text" label="Ishchining ismi:"/>*/}
                            {/*<AvField name="lastName" type="text" label="Ishchining familiyasi:"/>*/}
                            {/*<AvField name="age" type="number" label="Ishchining yoshi:"/>*/}
                            {/*<AvField name="position" type="text" label="Ishchining lavozimi:"/>*/}
                            {/*<AvField name="salary" type="number" label="Ishchining oyligi:"/>*/}

                        </ModalBody>
                        <ModalFooter>
                            <button type="submit" className="btn btn-success">Edit</button>
                            <button type="button" className="btn btn-secondary" onClick={changeModal}>Cancel</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>


            </div>
        );
    }
}

export default ModalUniqueDesign;