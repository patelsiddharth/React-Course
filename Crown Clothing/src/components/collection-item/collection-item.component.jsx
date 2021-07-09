import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({name, imageUrl, price}) => (
    <div className='collection-item'>
        <div 
            style={{
                backgroundImage : `url(${imageUrl})`
            }}
            className="background-image">
            <button className="addToCartBtn">ADD TO CART</button>
        </div>
        <div className="collection-footer">
            <span>{name}</span>
            <span>₹ {price}</span>
        </div>
    </div>
)

export default CollectionItem;