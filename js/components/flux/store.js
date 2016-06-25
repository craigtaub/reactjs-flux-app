var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

// Define initial data points
var _product = {}, _selected = null;
var _higher = {
  first: 'storeItem',
  message: 'message empty',
  toggled: false,
  lowerToggled: false,
  xToggled: false
};

// Method to load product data from mock API
function loadProductData(data) {
  _product = data[0];
  _selected = data[0].variants[0];
}

// Method to set the currently selected product variation
function setSelected(index) {
  _selected = _product.variants[index];
}

function setSelected(index) {
  _selected = _product.variants[index];
}

function setHigherMessage(data) {
  _higher.message = data;
}

function setToggle(data) {
  _higher.toggled = data;
}

function setLowerToggle(data) {
  _higher.lowerToggled = data;
}

function setXToggle(data) {
  _higher.xToggled = data;
}

// Extend Store with EventEmitter to add eventing capabilities
var Store = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getHigher: function() {
    return _higher;
  },

  // Return Product data
  getProduct: function() {
    return _product;
  },

  // Return selected Product
  getSelected: function(){
    return _selected;
  },

  // Emit Change event
  emitChange: function() {
    // console.log("CHANGE EMITTED");
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    // Respond to RECEIVE_DATA action
    case 'RECEIVE_DATA':
      loadProductData(action.data);
      break;

    // Respond to SELECT_PRODUCT action
    case 'SELECT_PRODUCT':
      setSelected(action.data);
      break;

    case 'FIRE_AJAX':
      setHigherMessage(action.data);
      break;

    case 'FIRE_TOGGLE':
      setToggle(action.data);
      break;

    case 'FIRE_LOWER_TOGGLE':
      setLowerToggle(action.data);
      break;

    case 'FIRE_X_TOGGLE':
      setXToggle(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  Store.emitChange();

  return true;

});

module.exports = Store;
