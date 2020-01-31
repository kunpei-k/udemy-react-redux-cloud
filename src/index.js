import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducers from './reducers';

import App from './Components/App';
import * as serviceWorker from './serviceWorker';

//  storeを作成する
const store = createStore(reducer)

//  storeを参照したい箇所を<Provider>で囲み、store={store}を渡すことで、storeを参照できるようになる！
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
