var AppDispatcher = require('./AppDispatcher');

// Define actions object
var Actions = {

  // Receive inital product data
  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: 'RECEIVE_DATA',
      data: data
    })
  },

  // Set currently selected product variation
  selectProduct: function(index) {
    AppDispatcher.handleAction({
      actionType: 'SELECT_PRODUCT',
      data: index
    })
  }

};

module.exports = Actions;
