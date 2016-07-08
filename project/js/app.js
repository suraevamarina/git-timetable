// Функция вывода данных, полученных через api
function loadlist() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://private-1a128-timetable4.apiary-mock.com/schedule-items', false);
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

    document.getElementById("ajax").innerHTML=output;
  }
}
