import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Portfolio_Item from '../components/Portfolio_Item';
import NotFound from '../components/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const AppRoutes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/portfolio' component={Portfolio} exact/>
                <Route path='/portfolio/:id' component={Portfolio_Item} />
                <Route path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoutes;