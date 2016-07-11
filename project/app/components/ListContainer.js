var React = require('react');
var AddItem = require('./AddItem');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var ListContainer = React.createClass({
  getInitialState: function(){
    return {
      list: AppStore.getList()
    }
  },
  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },
  handleAddItem: function(newName,newTime){
    AppActions.addItem(newName,newTime);
  },
  _onChange: function(){
    this.setState({
      list: AppStore.getList()
    })
  },
  // Функция вывода данных, полученных через api
loadlist: function(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET',
  'http://private-1a128-timetable4.apiary-mock.com/schedule-items',false);
  xhr.send();

  // если нет ошибки, вывести результат
  if (xhr.status == 200) {
    var data = JSON.parse(xhr.responseText);

    var output = '';
    for (var i in data.data) {
        output+='<div class="row">' +
        '<div class="small-1 columns">' + " " + '<input type="checkbox" id="' + data.data[i].id + '">' + " " + '</div>' + " " +
        '<div class="small-2 columns">' + " " + data.data[i].attributes.time + " " + '</div>' + " " +
        '<div class="small-6 columns">' + " " + data.data[i].attributes.title + " " + '</div>' + " " +
        '<div class="small-2 columns"><button type="button" class="tiny alert button" name="' + data.data[i].id + '">' + " " + 'x</button></div>' + " " +
        "</div>";
    }
   document.getElementById('ajax').innerHTML=output;
 }
},
openbox: function() {
  document.getElementById('box').style.display='block';
},
  render: function(){
    return (
      <div className="row">
        <div className="large-12 column">
          <h3 className="text-center"> Список участников </h3>

          <div className="large-4 column">
              <div className="expanded button-group">
                <a className="button" onClick={this.loadlist}>Загрузить расписание</a>
                <a className="button" onClick={this.openbox}>Добавить позицию</a>
              </div>
              <p id="ajax"></p>
          </div>

          <AddItem add={this.handleAddItem}/>
        

        </div>
      </div>
    )
  }
});

module.exports = ListContainer;
