import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import GlobalStyle from './styles/global';

import Main from './pages/Main';

import Header from './components/Header';
import Footer from './components/Footer';
import FollowMe from './components/FollowMe';


const App = () => {
    return <Router>
        <GlobalStyle />
        <Header/>
        <FollowMe/>
        <Switch>
            <Route path="/" component={Main}/>
        </Switch>
        <Footer/>
    </Router>
}

export default App;