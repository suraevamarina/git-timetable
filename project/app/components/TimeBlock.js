var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var TimeBlock = React.createClass({
  getList: function(){
    return list = AppStore.getList();
  },
  // устанавливает время для выбранных пунктов
  setTime: function(time){
    var a = document.getElementsByTagName('input');
    for (var i = 0; i < a.length; i++) {
        // если чекбокс отмечен
        if ((a[i].type == 'checkbox') && (a[i].checked)) {
          var list = this.getList();
          var title;
          for (var j = 0; j < list.length; j++)
          {
            if (list[j].id == a[i].id)
            {
              title = list[j].attributes.title;
              break;
            }
          }
          AppActions.updateItem(a[i].id,time,title);
          a[i].checked = false;
        }
    }
  },
  render: function(){
      var time = this.props.time;
    return (
      <div className="button-group">
        <a className="success button" onClick={this.setTime.bind(this,time[0])}>{time[0]}</a>
        <a className="success button" onClick={this.setTime.bind(this,time[1])}>{time[1]}</a>
        <a className="success button" onClick={this.setTime.bind(this,time[2])}>{time[2]}</a>
      </div>
    )
    }
  });

  module.exports = TimeBlock;
