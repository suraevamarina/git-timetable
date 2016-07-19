var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  list: []
};

// загрузка данных через mock API
function loadData(data) {
  for (var i in data) {
    _store.list.push(data[i]);
  }
}

var addItem = function(data){
  // добавление нового элемента к списку
  _store.list.push(data);
};

 var removeItem = function(index){
   _store.list.splice(index, 1);
 };

var AppStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  // сортировка и получение данных из хранилища
  getList: function(){
    _store.list.sort(function(a,b) {
      if (a.attributes.time > b.attributes.time) return 1;
      if (a.attributes.time < b.attributes.time) return -1;
    });
    return _store.list;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    // ответ на запрос получения данных
    case appConstants.RECEIVE_DATA:
      loadData(action.data);
      AppStore.emit(CHANGE_EVENT);
      break;

    case appConstants.ADD_ITEM:
      addItem(action.data);
      AppStore.emit(CHANGE_EVENT);
      break;

     case appConstants.REMOVE_ITEM:
       removeItem(action.data);
       AppStore.emit(CHANGE_EVENT);
       break;

    default:
      return true;
  }
});

module.exports = AppStore;
