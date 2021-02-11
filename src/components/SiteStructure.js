import React, {Component} from 'react';

class SiteStructure extends Component {
    render() {
        return (
            <div id="SiteStructure">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12">
                           <div className="card border-0">
                               <div className="card-body pb-0">
                                   <div className="row ml-3">
                                       <div className="col-4 mb-3">
                                           <div className="card bg-transparent border-0">
                                               <div className="card-header bg-transparent border-bottom-0">
                                                   <h2>Структура сайта</h2>
                                               </div>
                                               <div className="card-body d-flex">
                                                   <div>
                                                       <p className="mb-0">Количество </p>
                                                       <p className="mb-0">типов страниц:</p>
                                                   </div>
                                                   <input type="text" className="ml-4 text-center"/>
                                               </div>
                                           </div>
                                       </div>

                                       <div className="col-8 d-flex justify-content-end pr-0">
                                           <img src="Vizitka.png" alt="" className=""/>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteStructure;