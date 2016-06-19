import React  from 'react';
import Store from './flux/store';
import Actions from './flux/actions';
import Message from './Message.jsx';
import ToggleComponent from './ToggleComponent.jsx';

// Method to retrieve state from Stores
function getState() {
  return {
    higher: Store.getHigher(),
  };
}

// Define main Controller View
var ToggleFormComponent = React.createClass({

    // Get initial state from stores
    getInitialState: function() {
      return getState();
    },

    // Add change listeners to stores
    componentDidMount: function() {
      Store.addChangeListener(this._onChange);
    },

    // Remove change listers from stores
    componentWillUnmount: function() {
      Store.removeChangeListener(this._onChange);
    },

    onClickButton: function() {
      Actions.fireAjax("new message");
    },

    onToggle: function(data) {
      Actions.fireToggle(data);
    },


    // Method to setState based upon Store changes
    _onChange: function() {
      this.setState(getState());
    },

    // Render our child components, passing state via props
    render: function() {
        console.log('RENDER ToggleFormComponent');
        return (
            <div className="All">
                <Message click={this.onClickButton} text={this.state.higher.message} />
                <ToggleComponent onToggle={this.onToggle} storeToggled={this.state.higher.toggled}/>
            </div>
        )
    }

});

module.exports = ToggleFormComponent
