var AppDispatcher = require('./AppDispatcher');
var constants = require('./constants');

// Define actions object
var Actions = {

  // Receive inital product data
  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: constants.RECEIVE_DATA,
      data: data
    })
  },

  // Set currently selected product variation
  selectProduct: function(index) {
    AppDispatcher.handleAction({
      actionType: constants.SELECT_PRODUCT,
      data: index
    })
  }

};

module.exports = Actions;
