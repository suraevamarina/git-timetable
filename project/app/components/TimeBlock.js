var React = require('react');

var TimeBlock = React.createClass({
  render: function(){
      var time = this.props.time;
    return (
      <div className="button-group">
        <a className="success button">{time[0]}</a>
        <a className="success button">{time[1]}</a>
        <a className="success button">{time[2]}</a>
      </div>
    )
    }
  });

  module.exports = TimeBlock;
