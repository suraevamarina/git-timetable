var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var TimetableAPI = require('../utils/TimetableAPI');

var AppActions = {
  // получение начальных данных
  receiveData: function() {
      // получение данных через api
      TimetableAPI.getItems(function(data) {
        AppDispatcher.handleAction({
          actionType: appConstants.RECEIVE_DATA,
          data: data
        })
      });
    },
  addItem: function(data){
    // если запрос на добавление данных выполнился успешно,
    // данные добавляются в хранилище
    TimetableAPI.addItem(data, function(added) {
      if (added) {
        AppDispatcher.handleAction({
          actionType: appConstants.ADD_ITEM,
          data: data
        });
      }
    })
 }
};

module.exports = AppActions;
