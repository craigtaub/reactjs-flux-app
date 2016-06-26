import React  from 'react';
import {observer} from "mobx-react";

module.exports = observer(React.createClass({

    getInitialState: function () {
        return {
          storeToggled: false
        }
    },

    onLocalToggle: function () {
      this.setState({
        storeToggled: !this.state.storeToggled
      });

      // DO AJAX AND FAIL
      setTimeout(() => {
        this.setState({
          storeToggled: !this.state.storeToggled
        });
      }, 2000);
    },

    render: function() {
        console.log('RENDER toggle component, name:'  + this.props.text + ' state:', this.state.storeToggled);
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
                        checked={this.state.storeToggled}
                        onChange={this.onLocalToggle}
                    />
                    <label className='switch__label' htmlFor={this.props.id}></label>
              </div>
            </div>
        )
    }
}));
