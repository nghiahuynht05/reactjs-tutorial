import React, { Component } from 'react';
import ItemNavigater from './ItemNavigater';
import '../main.css';

class ListItem extends Component {
    constructor() {
        super();
        this.listItemDropdown = ['Lorem ipsum dolor', 'Magna phasellus', 'Etiam dolore nisl'];
    }
    render() {
        return (
            <ul>
                {this.listItemDropdown.map(function (item, index) {
                    return <ItemNavigater key={index} name={item} />
                })}
            </ul>
        );
    }
}
export default ListItem