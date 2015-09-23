var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

// Define initial data points
var _product = {}, _selected = null;

// Method to load product data from mock API
function loadProductData(data) {
  _product = data[0];
  _selected = data[0].variants[0];
}

// Method to set the currently selected product variation
function setSelected(index) {
  _selected = _product.variants[index];
}

// Extend Store with EventEmitter to add eventing capabilities
var Store = _.extend({}, EventEmitter.prototype, {

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
    console.log("CHANGE EMITTED");
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

    default:
      return true;
  }

  // If action was responded to, emit change event
  Store.emitChange();

  return true;

});

module.exports = Store;
