import React from 'react';
import Nav from "./Nav";
import Header from "./Header";
import BlokLanding from "./BlokLanding";
import TextContent from "./TextContent";
import DesignContent from "./DesignContent";
import VersionSite from "./VersionSite";
import AdminPanel from "./AdminPanel";
import ExtraOpportunities from "./ExtraOpportunities";
import Footer from "./Footer";

const OnlineShopPart = () => {
    return (
        <div>
            <Nav/>
            <Header action="Интернет магазин" color1="rgba(10,134,82,1)" color2="rgba(13,111,154,1)"
                    cost="4 800 000 сум"
                    class="text-white" link="/workingUp"/>

            <div className="container" id="eShop">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center mt-3 ml-3">
                                    <h3>Типов товара</h3>
                                    <input type="text" className="ml-5 text-center"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TextContent/>
            <DesignContent/>
            <VersionSite/>
            <AdminPanel/>

            <div className="container">
                <div className="row" style={{marginBottom: 500}}>

                </div>
            </div>

            <Footer Class="mt-5" linkPrev="/workingUp" />
        </div>
    );
};

export default OnlineShopPart;