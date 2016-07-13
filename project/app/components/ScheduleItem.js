var React = require('react');

var ScheduleItem = React.createClass({
  render: function(){
    var id = this.props.data.id,
        time = this.props.data.time,
        title = this.props.data.title;
    return (
      <div className="row">
        <div className="small-1 columns">
          <input type="checkbox" id={id} />
        </div>
        <div className="small-2 columns">
          {time}
        </div>
        <div className="small-6 columns">
          {title}
        </div>
        <div className="small-2 columns"><button type="button" className="tiny alert button" name={id}>x</button>
        </div>
      </div>
    )
  }
});

module.exports = ScheduleItem;
