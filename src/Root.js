import React from "react";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import withRoot from "./withRoot";

import App from './App';
import Header from './components/Shared/Header';


const Root = () => (
    <Router>
        <>
        <Header/>
        <Switch>
            <Route exact path="/" component={App}></Route>
        </Switch>
        </>
    </Router>

)



export default withRoot(Root);
