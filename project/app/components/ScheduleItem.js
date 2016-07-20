var React = require('react');
var AppActions = require('../actions/AppActions');

var ScheduleItem = React.createClass({
   handleRemoveItem: function(index){
     AppActions.removeItem(index);
   },
   // подсвечивает кнопку
   highlightBtn: function(time,id){
     var a = document.getElementById(time + '_id');
     if (document.getElementById(id).checked)
     {
       if (a != null)
       {
         // устанавливаем тень для соответствующей кнопки
         a.style.boxShadow = "0px 0px 5px 1px #008000";
       }
     }
     else
     {
       // определяем количество чекбоксов
       var cb = document.getElementsByTagName('input');
       var isRepeated = false;
       for (var i = 0; i < cb.length; i++) {
         if (document.getElementById(cb[i].id + '_time') != null)
         {
           // ищем отмеченные чекбоксы
           if (cb[i].checked)
           {
             // определяем, какое время около чекбокса
             var t = document.getElementById(cb[i].id + '_time').innerHTML;
             // если время совпадает с переданным в функцию
             if (t == time)
               isRepeated = true;
           }
         }
       }
       // если нет пунктов с таким же временем
       if (!isRepeated)
       {
         // убираем тень
         a.style.boxShadow = "";
       }
     }
   },
  render: function(){
    var id = this.props.data.id,
        time = this.props.data.attributes.time,
        title = this.props.data.attributes.title;
        divTime = id + '_time',
        divTitle = id + '_title';
    return (
      <div className="row divBlockOuter" id={divTitle}>
        <div className="small-1 columns">
          <input type="checkbox" id={id} onClick={this.highlightBtn.bind(this,time,id)}/>
        </div>
        <div className="small-2 columns" id={divTime}>
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
