import * as React from "react";
import Home from "./routes/home/home";
import Header from "./routes/components/header/header";
import Footer from "./routes/components/footer/footer";
import { Router, Route, Switch } from "react-router";
import * as H from 'history';
import { getRouteLinkAddress, RouteSimpleType } from "./tools/config";
import Login from './routes/login/login';
import './app.less';

const RouteFor = (address: RouteSimpleType) => {
    return address.map(item => {
        if (item.key == 1) {
            return <Route exact key={item.key} path={item.path} component={item.component} ></Route>
        } else {
            return <Route exact key={item.key} path={item.path} component={item.component} ></Route>
        }
    }
    )
}

export default class App extends React.Component {

    render() {
        return (
            <Router history={H.createHashHistory()}>
                <div>
                    <Header />
                    <Switch>
                        {RouteFor(getRouteLinkAddress())}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}



