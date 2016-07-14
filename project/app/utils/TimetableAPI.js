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
  }
};
