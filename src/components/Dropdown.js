import { Component } from "react";
import ListItem from './ListItem';
class Dropdown extends Component {
    constructor() {
        super();
    }

    render() {
        return (<li>
            <a href="index.html">Dropdown</a>
            <ul >
                <ListItem />
            </ul>
        </li>)
    }
}
export default Dropdown;