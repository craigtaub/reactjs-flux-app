var React  = require('react');
var About = require('./About.jsx');
var Item = require('./Item.jsx');
var Store = require('./flux/store');

// Method to retrieve state from Stores
function getState() {
  return {
    product: Store.getProduct(),
    selectedProduct: Store.getSelected(),
    about: "some state",
    dynamic: "some dyanamic state"
  };
}

// Define main Controller View
var App = React.createClass({

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

    // simple click handler
    handleClick: function() {
        this.setState({dynamic: "some UPDATE"});
    },

    // Render our child components, passing state via props
    render: function() {
        return (
            <div className="All">
                <h2 className="All-title">Prop: {this.props.name}</h2>
                <p className="All-about">State: {this.state.about}</p>
                <p className="All-dynamic" onClick={this.handleClick}>Dynamic state: {this.state.dynamic}</p>
                <p className="All-selected">SelectedProd (ftext proxies) state: {this.state.selectedProduct}</p>
                <p className="All-product">Product state: {this.state.product}</p>
                <div className="All-body">
                    <Item ftext={this.state.selectedProduct} />
                    <About text={this.props.about} />
                </div>
            </div>
        )
    },

    // Method to setState based upon Store changes
    _onChange: function() {
      this.setState(getState());
    }

});

module.exports = App
