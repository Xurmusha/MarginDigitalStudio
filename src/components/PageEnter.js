import React, {Component} from 'react';
import Radio from "./Radio";


class PageEnter extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="mt-5 pt-5">
                        <Radio for="Лиды из" messenger="Instagram" id="radio1"
                               info="Быть в Instagram и находить клиентов по минимальным ценами"
                                url="instagram34.png" color1="rgba(255,217,192,1)" color2="rgba(237,160,252,1)"/>
                        <Radio for="Лиды из" messenger="Facebook" id="radio2"
                               info="Быть в Facebook и находить клиентов по минимальным ценами"
                               url="facebook34.png" color1="rgba(198,224,255,1)" color2="rgba(174,187,255,1)"/>
                        <Radio for="Траффик в" messenger="Telegram" id="radio3"
                               info="Изготовление рекламы и показ в социальных сетях для введения людей в Telegram канал"
                               url="telegram34.png" color1="rgba(231,231,231,1)" color2="rgba(190,190,190,1)"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageEnter;