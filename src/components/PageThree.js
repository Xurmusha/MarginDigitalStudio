import React, {Component} from 'react';
import Nav from "./Nav";
import HeaderDark from "./HeaderDark";
import Www from "./WWW";
import SMMContent from "./SMMContent";
import FinanceAdvertisement from "./FinanceAdvertisement";
import WorkingUpSite from "./WorkingUpSite";
import OtherServis from "./OtherServis";
import ContexAdvertisement from "./ContexAdvertisement";
import Footer from "./Footer";
import FooterDark from "./FooterDark";

class PageThree extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <HeaderDark/>
                <Www color="rgba(255,172,25,0.25)" major="SMM"/>
                <SMMContent color1="rgba(255,250,238,1)" className="" colorOne="rgba(255,172,11,1)"
                            colorTwo="rgba(229,89,39,1)" btnText="2 сервиса" text="на сумму" number="4 800 000 сум" classColor="ml-3"/>
                <FinanceAdvertisement bgColor="rgba(236,247,255,1)" textColor="#3C5997" cost="1 200 000 сум" color="#3C5997"/>
                <Www major="WWW" color="rgba(156, 183, 255, 0.25)"/>
                <WorkingUpSite color1="rgba(255,250,238,1)" className="" colorOne="rgba(186,79,33,1)"
                               colorTwo="rgba(215,109,34,1)" cost="4 800 000 сум" textColor="ml-3" linkPage="/workingUp"/>

                <ContexAdvertisement bgColor="rgba(238,255,241,1)"/>
                <OtherServis/>
                <FooterDark/>

            </div>
        );
    }
}

export default PageThree;