import React, {Component} from 'react';
import Nav from "./Nav";
import Header from "./Header";
import SiteStructure from "./SiteStructure";
import TextContent from "./TextContent";
import Language from "./Language";
import DesignContent from "./DesignContent";
import AdminPanel from "./AdminPanel";
import VersionSite from "./VersionSite";
import ExtraOpportunities from "./ExtraOpportunities";
import Footer from "./Footer";

class VisitPart extends Component {
    render() {
        return (
            <div id="VisitPart">
                <Nav/>
                <Header action="Сайт Визитка" color1="rgba(186,79,33,1)" color2="rgba(215,109,34,1)"
                        cost="4 800 000 сум"
                        class="text-white" link="/workingUp"/>
                <SiteStructure/>
                <TextContent classContent="d-none"/>
                <Language/>
                <DesignContent/>
                <VersionSite/>
                <AdminPanel/>
                <ExtraOpportunities/>
                <Footer Class="mt-5" linkPrev="/workingUp"/>
            </div>
        );
    }
}

export default VisitPart;