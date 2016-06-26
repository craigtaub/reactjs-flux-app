var React = require('react');
// var ToggleFormComponent = require('./ToggleFormComponent.jsx'); // Smart components
var MobxParent = require('./mobx/MobxParent.jsx'); // MobX app

var API = require('./flux/api');
API.getProductData();

React.render(
    // <ToggleFormComponent />,
    <MobxParent />,
    document.getElementById('client-content')
);
