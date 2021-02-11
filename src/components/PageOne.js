import React, {Component} from 'react';
import Nav from "./Nav";
import Header from "./Header";
import Radio from "./Radio";
import RadioTwo from "./RadioTwo";
import Footer from "./Footer";

class PageOne extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header color1="rgba(244,244,244,1)" color2="rgba(244,244,243,1)" action="SMM продвижение" link="/"/>

                <div className="container">
                    <h1 className="my-4 ml-4">Реклама</h1>
                </div>

                <RadioTwo for="Лиды из" messenger="Instagram" messengertwo="Facebook"
                          info="Быть в Instagram, Facebook и находить клиентов по минимальным ценам"
                          url="instagram34.png" color1="rgba(255,217,192,1)" urlTwo="facebook34.png"
                          color2="rgba(237,160,252,1)" id="radioTwo"/>

                <Radio for="Траффик в" messenger="Telegram" messengertwo=""
                       info="Изготовление рекламы и показ в социальных сетях для введения людей в Telegram канал"
                       url="telegram34.png" color1="rgba(231,231,231,1)" color2="rgba(190,190,190,1)"/>
                <div className="container">
                    <h1 className="my-4 ml-4">Продвижение бренда</h1>
                </div>

                <Radio for="Продвижение" messenger="Instagram" messengertwo=""
                       info="Определение целей компании, продвижение бренда, увеличение лояльности и доверия аудитории"
                       url="instagram34.png" color1="rgba(232,130,61,1)" color2="rgba(160,54,181,1)"
                       colorText="text-color" class="text-white" Class="custom-check-2"/>
                <Radio for="Продвижение" messenger="Facebook" messengertwo=""
                       info="Определение целей компании, продвижение бренда, увеличение лояльности и доверия аудитории"
                       url="facebook34.png" color1="rgba(53,116,192,1)" color2="rgba(57,160,192,1)"
                       colorText="text-color" class="text-white" Class="custom-check-2"/>

                <Radio for="Продвижение" messenger="Tik Tok" messengertwo=""
                       info="Составление контент плана, упаковка бренда, профессиональная видео съёмка и монтаж  "
                       url="tik-tok.png" color1="rgba(22,96,101,1)" color2="rgba(239,29,82,1)" colorText="text-color"
                       class="text-white"  Class="custom-check-2"/>

                <Radio for="Канал" messenger="You Tube" messengertwo=""
                       info="Определение целей компании, составление контент плана, профессиональная видео съёмка и монтаж "
                       url="YouTube.png" color1="rgba(44,44,44,1)" color2="rgba(142,142,142,1)" colorText="text-color"
                       class="text-white"  Class="custom-check-2" width="123px" height="51px"/>


                <Footer Class="pt-5 mt-5" link="/parts" linkPrev="/"/>
            </div>
        );
    }
}

export default PageOne;