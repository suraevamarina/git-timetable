var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var TimetableAPI = require('../utils/TimetableAPI');

var AppActions = {
  // получение начальных данных
  receiveData: function() {
    // получение данных через api
    var data = TimetableAPI.getItems();

    AppDispatcher.handleAction({
      actionType: appConstants.RECEIVE_DATA,
      data: data
    })
  },
  addItem: function(data){
    // если запрос на добавление данных выполнился успешно,
    // данные добавляются в хранилище
    if (TimetableAPI.addItem())
    {
      AppDispatcher.handleAction({
        actionType: appConstants.ADD_ITEM,
        data: data
      });
   }
   else {
     alert("Данные не были добавлены!");
   }
  }
};

module.exports = AppActions;
