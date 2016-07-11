var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var AppActions = {
  addItem: function(name,time){
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_ITEM,
      data: {name,time}
    });
  }
};

module.exports = AppActions;
