import React  from 'react';

module.exports = React.createClass({
    // displayName: "ToggleComponent",

    onLocalToggle: function () {
      this.props.onToggle(!this.props.storeToggled);
    },

    shouldComponentUpdate: function(props, state) {
        return (props.storeToggled !== this.props.storeToggled);
        // will not re-render unless message changed
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
});
