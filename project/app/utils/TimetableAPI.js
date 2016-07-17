module.exports = {

  // получение данных с сервера
  getItems: function() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET',
    'http://private-1a128-timetable4.apiary-mock.com/schedule-items',false);
    xhr.send();

    if (xhr.status == 200)
      var data = JSON.parse(xhr.responseText);

    var output = data.data;

    return output;
  },
  // добавление нового элемента
  addItem: function(data,callback) {
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();

    xhr.open('POST',
    'http://private-1a128-timetable4.apiary-mock.com/schedule-items');

    xhr.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8');

    xhr.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) {
          // обработать ошибку
          alert("Данные не были добавлены!");
          callback(false);
          return;
        }
        else {
          callback(true);
        }
      }
    }
    xhr.send(json);
  }
};
