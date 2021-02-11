import React, {Component} from 'react';
import SMMContent from './SMMContent';
import Header from "./Header";
import Www from "./WWW";
import Nav from "./Nav";
import FinanceAdvertisement from "./FinanceAdvertisement";
import HeaderDark from "./HeaderDark";
import WorkingUpSite from "./WorkingUpSite";
import ContexAdvertisement from "./ContexAdvertisement";

class PageEnterTwo extends Component {
    render() {
        return (
            <div>

                <SMMContent link="/ChooseCategory" text="Ещё не заказан" class="d-none" classColor="text-secondary"/>
                <FinanceAdvertisement cost="0 сум" classColor="text-secondary" class="flex-column-reverse"/>
                <div className="" style={{height: 150, backgroundColor: '#e5e5e5'}}></div>

                <WorkingUpSite color1="rgba(244,244,244,1)" className="" colorOne="rgba(186,79,33,1)"
                               colorTwo="rgba(215,109,34,1)" class="d-none" text="Ещё не выбран" textColor="text-secondary" />
                <ContexAdvertisement bgColor="rgba(244,244,244,1)"/>

            </div>
        );
    }
}

export default PageEnterTwo;