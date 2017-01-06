import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Counter extends Component {
    render(){
        console.log(this.props);
        return ( <div>
                <input
                    type="text"
                    defaultValue="0"
                    ref="first"
                />
                <select ref="operator">
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <input
                    type="text"
                    defaultValue="0"
                    ref="second"
                />
                <button onClick={ this.caculate.bind(this) }> = </button>{this.caculate}
                <span>{this.props.value}</span>
            </div>
        )
    }
     caculate(){
        let first = Number(ReactDOM.findDOMNode(this.refs.first).value);
        let second = Number(ReactDOM.findDOMNode(this.refs.second).value);
        if(isNaN(first)||isNaN(second)){
            alert("请正确输入参数");
            ReactDOM.findDOMNode(this.refs.first).value = 0;
            ReactDOM.findDOMNode(this.refs.second).value = 0;
            return;
        }
        let operator = ReactDOM.findDOMNode(this.refs.operator).value;
        switch (operator){
            case '+' :
                this.props.add(first,second);
                break;
            case '-' :
                this.props.minus(first,second);
                break;
            case '*' :
                this.props.mutiple(first,second);
                break;
            case '/' :
                this.props.divided(first,second);
                break;
            default:
                break;
        }
    }
}
Counter.propTypes = {

}
export default Counter