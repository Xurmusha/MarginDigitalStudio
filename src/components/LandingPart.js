import React from 'react';
import Nav from "./Nav";
import Header from "./Header";
import SiteStructure from "./SiteStructure";
import TextContent from "./TextContent";
import Language from "./Language";
import DesignContent from "./DesignContent";
import VersionSite from "./VersionSite";
import AdminPanel from "./AdminPanel";
import ExtraOpportunities from "./ExtraOpportunities";
import Footer from "./Footer";
import BlokLanding from "./BlokLanding";

const LandingPart = (props) => {
    return (
        <div>
            <Nav/>
            <Header action="Сайт Landing" color1="rgba(0,98,173,1)" color2="rgba(1,116,161,1)"
                    cost="4 800 000 сум"
                    class="text-white" link="/workingUp"/>
            <BlokLanding/>
            <TextContent classContent="d-none"/>
            <DesignContent/>
            <VersionSite/>
            <AdminPanel/>
            <ExtraOpportunities/>
            <Footer Class="mt-5" linkPrev="/workingUp"/>
        </div>
    );
};

export default LandingPart;