import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Test from './Test';

const Layout = () => {
    return (
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/test" component={Test}/>
        </Switch>
    )
}

export default Layout;