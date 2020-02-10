import React from 'react';
import ReactDOM from 'react-dom';
//  storeを作成するための関数をインポート
import { createStore, applyMiddleware } from 'redux';
//  作成したstoreを参照するための関数をインポート
import { Provider } from 'react-redux';
//  action creatorの内部で関数を扱うことができるようになるプラグイン
import thunk from 'redux-thunk';

import './index.css';
// 作成したreducersをインポート
import reducers from './reducers';

import EventsIndex from './Components/events_index';
import * as serviceWorker from './serviceWorker';

//  storeを作成する
const store = createStore(reducers, applyMiddleware(thunk))

//  storeを参照したい箇所を<Provider>で囲み、store={store}を渡すことで、storeを参照できるようになる！
ReactDOM.render(
    <Provider store={store}>
        <EventsIndex />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
