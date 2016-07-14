var React = require('react');
var ListContainer = require('./components/ListContainer');
var TimetableAPI = require('./utils/TimetableAPI');

// получение данных
TimetableAPI.getItems();

var App = React.createClass({
  render: function(){
    return (
        <div className="row">
          <ListContainer />
        </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)
