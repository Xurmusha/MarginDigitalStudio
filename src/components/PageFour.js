import React from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Radio from "./Radio";
import Footer from "./Footer";
import SiteVizitka from "./SiteVizitka";
import Landing from "./Landing";
import OnlineShopping from "./OnlineShopping";

const PageFour = (props) => {
    return (
        <div>
            <Nav/>
            <Header action="Разработка сайта" color1="rgba(244,244,244,1)" color2="rgba(244,244,244,1)"
                    link="/ChooseCategory"/>

            <div className="container">
                <form>
                    <SiteVizitka history={props.history} nameOfSite="Визитка" for="Сайт" info="Cайт состоящий из основной информации об компании,
                товарах и услугах, ценах и контактных данных." color1="rgba(186,79,33,1)" color2="rgba(215,109,34,1)"
                                 Class="custom-check-2"/>

                    <Landing history={props.history} nameOfSite="Landing" for="Сайт" info="Сайт со всей информацией о вашей продукции или услуге в
                одной странице с высокой конверсией для получения заявок." color1="rgba(0,98,173,1)"
                             color2="rgba(1,116,161,1)" Class="custom-check-2"/>

                    <OnlineShopping history={props.history} nameOfSite="магазин" for="Интернет " info="Развивайте свой бизнес, продавая товары и услуги
                в Интернете." color1="rgba(10,134,82,1)" color2="rgba(13,111,154,1)" Class="custom-check-2"/>
                </form>
            </div>

            <Footer Class="mt-5 pt-5" linkPrev="/ChooseCategory" link="/parts"/>

        </div>
    );
};

export default PageFour;