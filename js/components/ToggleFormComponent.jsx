import React  from 'react';
import Store from './flux/store';
import Actions from './flux/actions';
import Message from './Message.jsx';
import ToggleComponent from './ToggleComponent.jsx';
import ToggleComponentX from './mobx/ToggleComponentX.jsx';
import Simple from './mobx/Simple.jsx';

// Method to retrieve state from Stores
function getState() {
  return {
    higher: Store.getHigher()
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

    onLowerToggle: function(data) {
      Actions.fireLowerToggle(data);
    },

    onXToggle: function(data) {
      Actions.fireXToggle(data);
    },

    // Method to setState based upon Store changes
    _onChange: function() {
      this.setState(getState());
    },

    // Render our child components, passing state via props
    // with same component label + input must have unique name else click does wrong one.
    render: function() {
        console.log('RENDER ToggleFormComponent');
        var title = {
          title: 'My Title'
        };
        return (
            <div className="All">
                <Simple simple={title} />
                <Message click={this.onClickButton} text={this.state.higher.message} />
                <ToggleComponent text="first" id="1" onToggle={this.onToggle} storeToggled={this.state.higher.toggled}/>
                <ToggleComponent text="second" id="2" onToggle={this.onLowerToggle} storeToggled={this.state.higher.lowerToggled}/>
                <ToggleComponentX text="Xthird" id="3" onToggle={this.onXToggle} storeToggled={this.state.higher.xToggled}/>
            </div>
        )
    }

});

module.exports = ToggleFormComponent
