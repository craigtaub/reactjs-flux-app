import React  from 'react';

module.exports = React.createClass({

    shouldComponentUpdate: function(props, state) {
        return (props.text !== this.props.text);
        // will not re-render unless message changed
    },


    render: function() {
        console.log('RENDER message');
        return (
            <div className="Flux">
                <p onClick={this.props.click}>(click)</p>
                MESSAGE COMPONENT: {this.props.text}
            </div>
        )
    }
});
