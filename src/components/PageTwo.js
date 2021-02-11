import React, {Component} from 'react';
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Design from "./Design";
import Rad from "./Rad";
import Checkbox from "./Checkbox";
import Language from "./Language";
import Advertisement from "./Advertisement";


class PageTwo extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header color1="rgba(255,217,192,1)" color2="rgba(237,161,251,1)" action="Лиды из Instagram Facebook"
                        text="SMM продвижение" cost="4 800 000 сум" link="/SMMAction"/>

                <Design/>
                <Language/>
                <Advertisement />
                <Footer link="/parts"/>
            </div>
        );
    }
}

export default PageTwo;