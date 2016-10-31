import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
const store = createStore(reducers);

// 상태가 변경될 때마다 로그로 기록한다.
store.subscribe( () => console.log(store.getState()) );

// 상태가 변경될 때마다 로그로 기록한다.
let unsubscribe = store.subscribe( () => console.log(store.getState()) );

// 상태 변경 리스닝을 중단한다.
unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);