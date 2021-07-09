import React from 'react';

const Portfolio_Item = (props) => (
    <div>
        <h1>Things I've Done</h1>
        <p>This page is for the item with id {props.match.params.id}</p>
    </div>
)

export default Portfolio_Item;