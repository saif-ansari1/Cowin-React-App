import React, { Component } from 'react';
import Home from './component/Home';
// import CarouselClass from './component/carousel';
// import ConditionalRender from './component/ConditionalRender';
import Login from './component/Login';
import Registration from './component/Registration';
import SelectDataExampleApi from './component/SelectDataExampleApi';
import Cowin from './component/Cowin';
import List from './component/List';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/users">
                        <Home />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Registration />
                    </Route>
                    <Route path="/apiexample">
                        <SelectDataExampleApi />
                    </Route>
                    <Route path="/Cowin">
                        <Cowin />
                    </Route>
                    <Route path="/List">
                        <List />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router >
        );
    }
}

export default App;
