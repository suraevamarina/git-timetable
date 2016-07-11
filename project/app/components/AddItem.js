var React = require('react');

var AddItem = React.createClass({
  handleSubmit: function(){

      // получаем введенное значение
      var newName = this.refs.newName.getDOMNode().value;
      // очищаем поле ввода
      this.refs.newName.getDOMNode().value = '';
      // добавляем введенные данные в свойство
      this.props.add(newName);

      // получаем введенное значение
      var newTime = this.refs.newTime.getDOMNode().value;
      // очищаем поле ввода
      this.refs.newTime.getDOMNode().value = '';
      // добавляем введенные данные в свойство
      this.props.add(newTime);

      this.postItem(newName,newTime);

  },
  closebox: function() {
    document.getElementById('box').style.display='none';
  },
  render: function(){
    return (
      <div className="large-4 column">
      <div className="callout primary accordion-content" id="box">
          <h5 className="text-center">Добавление нового пункта</h5>
          <label>Название
              <input type="text" ref="newName" />
          </label>
          <label>Время
              <input type="text"  ref="newTime"/>
          </label>
          <div className="expanded button-group">
              <a className="success button" onClick={this.handleSubmit}>OK</a>
              <a className="alert button" onClick={this.closebox}>Cancel</a>
          </div>
      </div>
      </div>

    )
  }
});

module.exports = AddItem;
