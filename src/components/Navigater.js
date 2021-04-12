import React, { Component } from 'react';
import Dropdown from './Dropdown';
import ItemNavigater from './ItemNavigater';

class Navigater extends Component {
    constructor() {
        super();
        this.listItem = [{ name: 'Left Sidebar', status: false }, { name: 'Right Sidebar', status: false }, { name: 'Login', status: false }];
        this.listItemSubMenu = ['Lorem ipsum dolor', 'Magna phasellus', 'Etiam dolore nisl'];
    }
    render() {
        return (
            <nav id="nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <Dropdown />
                    {this.listItem.map(function (item, index) {
                        return <ItemNavigater key={index} name={item.name} />
                    })}
                </ul>
            </nav>
        );
    }
}
export default Navigater;