import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store'
import {countAddAction} from './action/counter_action'


store.dispatch(countAddAction)

// store.dispatch(loadPosts)

//通过provider把redux和react连接，然后把store传递到react项目中
ReactDOM.render(<Provider store = {store}>
<App />
</Provider>, 
document.getElementById('root'));


serviceWorker.unregister();
