var React = require('react');
var AddItem = require('./AddItem');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var ScheduleItem = require('./ScheduleItem');

var ListContainer = React.createClass({
  getInitialState: function(){
    return {
      list: AppStore.getList()
    }
  },
  componentDidMount: function(){
    // слушает событие и обновляет, если событие произошло
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    // больше не слушает событие
    AppStore.removeChangeListener(this._onChange);
  },
  handleAddItem: function(data){
    AppActions.addItem(data);
  },
  // при изменении получаем новый список
  _onChange: function(){
    this.setState({
      list: AppStore.getList()
    })
  },
  // определет максимальный id
  defineMaxId: function(data) {
    var maxId = data[0].id;
    for (var i in data) {
      if (data[i].id > maxId)
        maxId = data[i].id;
    }
    return maxId;
  },
  openBox: function() {
    document.getElementById('box').style.display='block';
  },
  render: function(){
    var template;

    template = this.state.list.map(function(item,index) {
      return (
        <div key={index}>
          <ScheduleItem data = {item} />
        </div>
      )
    })
    return (
      <div className="row">
        <div className="large-12 column">
          <h3 className="text-center"> Список участников </h3>

          <div className="large-4 column">
              <div className="expanded button-group">
                <a className="button" onClick={this.openBox}>Добавить позицию</a>
              </div>
              {template}
          </div>
              <AddItem add={this.handleAddItem} maxId={this.defineMaxId(this.state.list)}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;
