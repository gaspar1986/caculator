import { createStore } from 'redux';
import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Provider,connect} from 'react-redux';
const counter = (count = 0, action) => {
    switch (action.type) {
        case 'increment':
            return count + 1;
        case 'decrement':
            return count - 1;
        default:
            return count;
    }
}
let store = createStore(counter);
class Counter extends Component {
    render(){
        return ( < div >
            < h1 > 计数器: { this.props.value } </h1>
            < button className="btn btn-default" onClick = { this.props.onIncrement } > + </button>
            < button className="btn btn-default" onClick = { this.props.onDecrement } > - </button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
	return {
		value:state
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement:()=> dispatch({type:'increment'}),
		onDecrement:()=> dispatch({type:'decrement'})
	}
}
const RootApp = connect(mapStateToProps,mapDispatchToProps)(Counter)
render(<Provider store={store}>
			<RootApp />
		</Provider>,
        document.getElementById('app')
)