var React   = require('react');
// var All = require('./All.jsx');
var API = require('./flux/api');
var ToggleFormComponent = require('./ToggleFormComponent.jsx');

API.getProductData();

React.render(
    <ToggleFormComponent />,
    document.getElementById('client-content')
);

// var HelloWorld = React.createClass({
//     render: function () {
//         return <div > Hello World! < /div>
//     }
// });
//
// React.render( < HelloWorld / > , document.body);
