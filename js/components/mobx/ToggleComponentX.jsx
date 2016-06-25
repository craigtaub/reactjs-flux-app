import React  from 'react';
import {observer} from "mobx-react";

module.exports = observer(React.createClass({
    // displayName: "ToggleComponentX",

    onLocalToggle: function () {
      this.props.onToggle(!this.props.storeToggled);
    },

    render: function() {
        console.log('RENDER toggle component, name:'  + this.props.text + ' state:', this.props.storeToggled);
        return (
            <div className="form-element">
              <h2>{this.props.text}</h2>
              <div className="switch">
                  TOGGLE COMPONENT:
                  <input
                        type="checkbox"
                        id={this.props.id}
                        className='switch__toggle'
                        name={this.props.id}
                        checked={this.props.storeToggled}
                        onChange={this.onLocalToggle}
                    />
                    <label className='switch__label' htmlFor={this.props.id}></label>
              </div>
            </div>
        )
    }
}));
