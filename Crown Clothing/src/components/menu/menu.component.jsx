import React from 'react';
import './menu.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';

class Menu extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            sections : [
                {
                    title : 'HATS',
                    imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
                    id : 1,
                    size : 'small',
                    linkUrl : 'hats'
                },
                {
                    title : 'JACKETS',
                    imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
                    id : 2,
                    size : 'small',
                    linkUrl : ''
                },
                {
                    title : 'SNEAKERS',
                    imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id : 3,
                    size : 'small',
                    linkUrl : ''
                },
                {
                    title : 'WOMENS',
                    imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                    id : 4,
                    size : 'large',
                    linkUrl : ''
                },
                {
                    title : 'MENS',
                    imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
                    id : 5,
                    size : 'large',
                    linkUrl : ''
                },
            ]
        }
    }

    render()
    {
        return (
            <div className="menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                            <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}
export {Menu};

// Both the syntax is similar. If key and value is same for any component we can use ES6 destructoring to shorten code
// this.state.sections.map(({id, title, imageUrl, size, linkUrl}) => (
//     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>

// this.state.sections.map(({id, ...otherSectionProps}) => (
//     <MenuItem key={id} {...otherSectionProps}/>