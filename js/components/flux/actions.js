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
  },

  fireAjax: function(data) {
    AppDispatcher.handleAction({
      actionType: 'FIRE_AJAX',
      data: data
    })
  },

  fireToggle: function(data) {
    AppDispatcher.handleAction({
      actionType: 'FIRE_TOGGLE',
      data: data
    });

    // Ajax fails
    // setTimeout(function() {
    //   AppDispatcher.handleAction({
    //     actionType: 'FIRE_TOGGLE',
    //     data: !data
    //   });
    // }, 5000)
  },

  fireLowerToggle: function(data) {
    AppDispatcher.handleAction({
      actionType: 'FIRE_LOWER_TOGGLE',
      data: data
    });
  },

  fireXToggle: function(data) {
    AppDispatcher.handleAction({
      actionType: 'FIRE_X_TOGGLE',
      data: data
    });
  }

};

module.exports = Actions;
