var FluxCartActions = require('./actions');

module.exports = {

  getProductData: function() {
    var data = [
      {
        id: '123',
        name: 'Signature Lager',
        variants: [ 'first', 'secomd', 'third' ]
        // can hand it object and will print all values
      }
    ];

    // IMPORTANT kicks off first load of data
    FluxCartActions.receiveProduct(data);
  }

};
