var React   = require('react');
var All = require('./All.jsx');
var API = require('./flux/api');

API.getProductData();

React.render(
    <All
        name="Craig name"
        about="About text"
    />,
    document.getElementById('client-content')
);
