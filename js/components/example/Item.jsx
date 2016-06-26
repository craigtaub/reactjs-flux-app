var React = require('react');
var Actions = require('./flux/actions');

module.exports = React.createClass({

    updateSelect: function() {
        Actions.selectProduct(1);
    },

    render: function() {
        return (
            <div className="Flux">
                <p onClick={this.updateSelect} className="Flux-text">Ftext (click) prop: {this.props.ftext}</p>
            </div>
        )
    }
});
