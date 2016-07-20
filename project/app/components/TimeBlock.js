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
        var divTime = a[i].id + '_time',
            divTitle = a[i].id + '_title',
            divCancel = a[i].id + '_btnCancel';

      if (document.getElementById(divTime) != null)
      {
        var content_time = document.getElementById(divTime).innerHTML;
        if (content_time == time)
        {
          var computedStyle = getComputedStyle(document.getElementById(divTitle));

          // если пункты не были подсвечены
          if (computedStyle.backgroundColor == "rgb(247, 180, 168)")
          {
            // подсвечиваем
            document.getElementById(divTitle).style.background = "#ec5840";
          }
          // если пункты уже подсвечены
          else if (computedStyle.backgroundColor == "rgb(236, 88, 64)")
          {
            // убираем подсветку
            document.getElementById(divTitle).style.background = "#f7b4a8";
          }
        }
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
    }
  },
  render: function(){
      var time = this.props.time;
      var aId = [];
      for (var i = 0; i < time.length; i++)
        aId[i] = time[i] + '_id';
    return (
      <div className="button-group">
        <a className="success button" id={aId[0]} onClick={this.setTime.bind(this,time[0])}>{time[0]}</a>
        <a className="success button" id={aId[1]} onClick={this.setTime.bind(this,time[1])}>{time[1]}</a>
        <a className="success button" id={aId[2]} onClick={this.setTime.bind(this,time[2])}>{time[2]}</a>
      </div>
    )
    }
  });

  module.exports = TimeBlock;
