var React = require('react');
var ListContainer = require('./components/ListContainer');
var AppActions = require('./actions/AppActions');

// получение начальных данных
AppActions.receiveData();

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
