var React = require('react');
var ListContainer = require('./components/ListContainer');

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
