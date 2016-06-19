import React  from 'react';


module.exports = React.createClass({

    onToggle: function () {
      this.props.onToggle(!this.props.storeToggled);
    },

    shouldComponentUpdate: function(props, state) {
        return (props.storeToggled !== this.props.storeToggled);
        // will not re-render unless message changed
    },

    render: function() {
        console.log('RENDER toggle component, state:', this.props.storeToggled);
        return (
            <div className="form-element">
              <div className="switch">
                  TOGGLE COMPONENT:
                  <input
                        type="checkbox"
                        id='toggleName'
                        className='switch__toggle'
                        name='toggleName'
                        checked={this.props.storeToggled}
                        onChange={this.onToggle}
                    />
                    <label className='switch__label' htmlFor='toggleName'></label>
              </div>
            </div>
        )
    }
});
