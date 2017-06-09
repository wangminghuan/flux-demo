import React,{Component} from 'react';
import Stores from '../stores/stores';
import Actions from'../actions/actions';
import Button from'../components/Button';

export default class extends Component{
  constructor(props){
    super(props);
      this.state={
        items: Stores.getAll()
      }
   }
   //触发名为addNewItem的action，并传递数据
  createNewItem=(event)=> {
     Actions.addNewItem('item');
  }
  // 绑定change事件，store更新后会调用onChange,最终通过setState更新视图
   onChange=()=> {
    this.setState({
      items: Stores.getAll()
    });
  }
  componentDidMount() {
    //组件创建后监听change事件
    Stores.addChangeListener(this.onChange);
  }

  componentWillUnmount(){
    //组件销毁后移除监听
    Stores.removeChangeListener(this.onChange);
  }
  render() {
    return <Button
      items={this.state.items}
      onClick={this.createNewItem} />
  }
}
