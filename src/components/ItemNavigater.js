
import React, { Component } from 'react';
import '../main.css';

class ItemNavigater extends Component {
    render() {
        return (
            <li><a href="index.html">{this.props.name}</a></li>
        );
    }
}

export default ItemNavigater;