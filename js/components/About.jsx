var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
      return {
        newText: "about newText"
      };
    },
    onClick: function() {
      this.setState({newText: "CLICKED"})
    },
    render: function() {
        return (
            <div className="About">
                <p className="About-text">About text: {this.props.text}</p>
                <p onClick={this.onClick} className="About-newText">About (click) state: {this.state.newText}</p>
            </div>
        )
    }
});
