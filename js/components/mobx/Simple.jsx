import {observer} from "mobx-react";
import React from 'react'

const SimpleX = observer(React.createClass({
    // displayName: "SimpleX",

    shouldComponentUpdate: function(props, state) {
        return (props.simple.title !== this.props.simple.title);
    },

    render() {
        console.log('RENDER SimpleX');
        return <div>{this.props.simple.title}</div>
    }
}));

module.exports = SimpleX;
