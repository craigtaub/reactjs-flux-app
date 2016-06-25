var React   = require('react');
// var All = require('./All.jsx'); // simple app
var ToggleFormComponent = require('./ToggleFormComponent.jsx'); // Smart components
var API = require('./flux/api');

API.getProductData();

React.render(
    <ToggleFormComponent />,
    document.getElementById('client-content')
);
