import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1>My Work</h1>
        <p>Check out the following things i've done</p>
        <p>
            <NavLink to='/portfolio/1'>Item One</NavLink>
        </p>
        <p>
            <NavLink to='/portfolio/2'>Item Two</NavLink>
        </p>
    </div>
)

export default Portfolio;
// <Route path='/Portfolio/:id' component={Portfolio_Item} />