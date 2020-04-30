import React, { Component } from 'react';
import TypeList from './TypeList';

class List extends Component {
    constructor() {
        super();
        this.typeList = [
            {type: '1', isRender: true},
            {type: 'A', isRender: true},
            {type: 'a'},
            {type: 'I', isRender: true},
            {type: 'i'}
        ]
    };

    render() {
        return (
            <div class="List">
                <h2>Use only HTML to set list type</h2>
                { this.typeList.map((item, index) => 
                <TypeList key={index} item={ item } />)
                }
            </div>
        )
    
    }
}

export default List;