// addNewItem为action名称（可理解为事件名）
// 触发对应action后，action内部通过派发器AppDispatcher，来发布actionType和data(发布数据)
import AppDispatcher from '../dispather/dispather';
export default {
  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    })
  }
};

