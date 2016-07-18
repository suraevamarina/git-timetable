var React = require('react');
var AppActions = require('../actions/AppActions');

var ScheduleItem = React.createClass({
   handleRemoveItem: function(index){
     AppActions.removeItem(index);
   },
  render: function(){
    var id = this.props.data.id,
        time = this.props.data.attributes.time,
        title = this.props.data.attributes.title;
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
        <div className="small-2 columns">
          <button type="button"
             className="tiny alert button"
              onClick={this.handleRemoveItem.bind(this,this.props.index)}
             name={id}>x</button>
        </div>
      </div>
    )
  }
});

module.exports = ScheduleItem;
