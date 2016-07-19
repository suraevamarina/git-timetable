var React = require('react');
var AddItem = require('./AddItem');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var ScheduleItem = require('./ScheduleItem');
var TimeBlock = require('./TimeBlock');

var TIME_BEGIN = '10:00';
var TIME_END = '13:30';
var PERIOD = 15;

var ListContainer = React.createClass({
  getInitialState: function(){
    return {
      list: [],
      times: this.computeTimes()
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
  // вычисляет время для блока времени
  computeTimes: function() {
    var times = [];

    var newTime = TIME_BEGIN;

    var d = new Date("January 1, 1970 "+ newTime);

    for (var i = 0; newTime < TIME_END; i++)
    {
      times[i] = [];
      for (var j = 0; j < 3; j++)
      {
        d.setMinutes(d.getMinutes() + PERIOD);
        var minutes;
        if (d.getMinutes() < 10)
          minutes = '0' + d.getMinutes();
        else
          minutes = d.getMinutes();
        times[i][j] = newTime;
        newTime = d.getHours() + ":" + minutes;
      }
    }
    console.log(times);
    return times;
  },
  // определет максимальный id
  defineMaxId: function(data) {
    var maxId;
    if (data.length == 0)
    {
      maxId = 0;
    }
    else
    {
      maxId = data[0].id;
      for (var i in data) {
      if (data[i].id > maxId)
        maxId = data[i].id;
      }
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
          <ScheduleItem data = {item} index = {index}/>
        </div>
      )
    });

    var block;

    block = this.state.times.map(function(item,index) {
      return (
        <div key={index}>
          <TimeBlock time = {item}/>
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
          <div className="large-4 column">
            {block}
          </div>
              <AddItem add={this.handleAddItem} maxId={this.defineMaxId(this.state.list)}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;
