
import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './components/Counter';
import store from './redux/store';
import RootApp from './containers/RootApp';
render(<Provider store={store}>
			<RootApp />
		</Provider>,
        document.getElementById('app')
)