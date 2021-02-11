import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageOne from "./PageOne";
import PageEnter from "./PageEnter";
import PageTwo from "./PageTwo";
import PageEnterTwo from "./PageEnterTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import VisitPart from "./VisitPart";
import Landing from "./Landing";
import LandingPart from "./LandingPart";
import OnlineShopPart from "./OnlineShopPart";

class Routing extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>

                    <Switch>
                        <Route exact path='/' component={PageEnter}/>
                        <Route exact path='/SMMAction' component={PageOne}/>
                        <Route exact path='/design' component={PageTwo}/>
                        <Route exact path='/parts' component={PageEnterTwo}/>
                        <Route exact path='/ChooseCategory' component={PageThree}/>
                        <Route exact path='/workingUp' component={PageFour}/>
                        <Route exact path='/Visit' component={VisitPart}/>
                        <Route exact path='/landing' component={LandingPart}/>
                        <Route exact path='/OnlineShop' component={OnlineShopPart}/>
                    </Switch>

                </BrowserRouter>

            </div>
        );
    }
}

export default Routing;