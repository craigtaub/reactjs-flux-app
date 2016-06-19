var React   = require('react');
// var All = require('./All.jsx');
var API = require('./flux/api');
var ToggleFormComponent = require('./ToggleFormComponent.jsx');

API.getProductData();

React.render(
    <ToggleFormComponent />,
    document.getElementById('client-content')
);
