const middle = ({getState,dispatch}) => next => action =>{
	
	console.log('dispatching: ' ,action);
	console.log('prev state: ' ,getState());
	next(action);
	console.log('next state: ' ,getState());

}
export default middle;