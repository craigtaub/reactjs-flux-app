import {observer} from "mobx-react";
import React from 'react'
import ToggleSmart from './ToggleSmart.jsx';

const MobxParent = observer(React.createClass({

    render() {
        console.log('RENDER mobx/Parent');
        return <div>
          <h1>Parent</h1>
          <ToggleSmart text="Xthird" id="3" />
        </div>
    }
}));

module.exports = MobxParent;
