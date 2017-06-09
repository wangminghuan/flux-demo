//Button组件，不包含任何状态
//所有的数据跟事件都通过props传递
import React,{Component} from 'react';
export default class extends Component{
	constructor(props){
      super(props);
	}
	render(){
		return(
          <div>
		    <ul>{this.props.items.map((child,index)=><li key={index}>{index}-{child}</li>)}</ul>
		    <button onClick={this.props.onClick}>New Item</button>
		  </div>
		)
	}
}
