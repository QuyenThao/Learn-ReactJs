import React, { Component } from 'react';
import './TypeList.css';

class TypeList extends Component {
    render() {
        const { item } = this.props;
        let className = 'Render';
        if (item.isRender) {
            className += ' Is-Render';
        }
        return (
            <ol className={className} type={item.type}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        );
    }
}

export default TypeList;