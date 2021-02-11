import React, {Component} from 'react';

class HeaderDark extends Component {
    render() {
        return (
            <div id="HeaderDark" className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-5 d-flex align-items-center pr-0">
                            <div className="card border-0 bg-transparent">
                                <div className="card-body">
                                    <h3 className="text-white">Название компании:</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-7 pr-4 pl-0">
                            <div className="card border-0 bg-white my-3">
                                <div className="card-body px-0 py-0">
                                    <h3 className="py-2 mb-0 pl-3">Universal Stroy</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderDark;