// Функция вывода данных, полученных через api
function loadlist() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://private-1a128-timetable4.apiary-mock.com/schedule-items', false);
  xhr.send();

  if (xhr.status != 200) {
    // обработать ошибку
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  } else {
    // вывести результат
    //alert(xhr.responseText);
    document.getElementById('ajax').innerHTML=xhr.responseText; 
  }
}
