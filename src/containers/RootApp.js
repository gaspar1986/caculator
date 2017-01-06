import React, { Component, PropTypes } from 'react';
import {Provider,connect} from 'react-redux';
import Counter from '../components/Counter';
const mapStateToProps = (state) => {
	return {
		value:state
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		add:(first,second) => dispatch({type:'add',first,second}),
		minus:(first,second) => dispatch({type:'minus',first,second}),
		mutiple:(first,second) => dispatch({type:'mutiple',first,second}),
		divided:(first,second) => dispatch({type:'divided',first,second})
	}
}
const RootApp = connect(mapStateToProps,mapDispatchToProps)(Counter);
export default RootApp;