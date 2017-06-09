//可以理解为路由，内部注册（订阅）了多个actionType
//对不同的actionType分发不同的回调
//回调函数就是触发store内部事件，并传递数据
import Stores from '../stores/stores.js';
const Dispatcher = require('flux').Dispatcher;
const AppDispatcher = new Dispatcher();

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      //发送数据(绑定事件)
      Stores.addNewItemHandler(action.text);
      //通知接受(触发事件)
      Stores.emitChange();
      break;
    default:
  }
})

export default AppDispatcher;
