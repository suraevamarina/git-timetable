module.exports = {

  // получение данных с сервера
    getItems: function(callback) {
      var xhr = new XMLHttpRequest();

      xhr.open('GET',
      'http://private-1a128-timetable4.apiary-mock.com/schedule-items');

      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status != 200) {
            // обработать ошибку
            alert("Данные не были получены!");
            return;
          }
          else {
            var data = JSON.parse(this.responseText);

            var output = data.data;

            callback(output);
          }
        }
      }

      xhr.send();
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
  },
  // удаление элемента
  removeItem: function(index,callback) {
    var xhr = new XMLHttpRequest();

    xhr.open('DELETE',
    'http://private-1a128-timetable4.apiary-mock.com/schedule-items/$index');

    xhr.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) {
          // обработать ошибку
          alert("Данные не были удалены!");
          callback(false);
          return;
        }
        else {
          callback(true);
        }
      }
    }
    xhr.send();
  },
  // обновление элемента
  updateItem: function(id,time,title,callback) {
    data = {"id": id, "attributes": {"title": title, "time": time}};

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();

    xhr.open('PUT',
    'http://private-1a128-timetable4.apiary-mock.com/schedule-items/$id');

    xhr.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8');

    xhr.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) {
          // обработать ошибку
          alert("Данные не были обновлены!");
          callback(false);
          return;
        }
        else {
          callback(true);
        }
      }
    }
    xhr.send(json);
  },
};
