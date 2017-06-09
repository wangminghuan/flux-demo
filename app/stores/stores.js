const EventEmitter = require('events').EventEmitter;

export default Object.assign({}, EventEmitter.prototype, {
    items: [],

    getAll: function() {
        return this.items;
    },

    addNewItemHandler: function(text) {
        //执行事件
        this.items.push(text);
    },

    emitChange: function() {
        //触发change事件
        this.emit('change');
    },

    addChangeListener: function(callback) {
      //监听变化，执行app.jsx内部的回调
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
      //移出监听
        this.removeListener('change', callback);
    }
});
