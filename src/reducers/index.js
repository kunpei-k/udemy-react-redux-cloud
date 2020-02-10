//reducers
import { combineReducers } from 'redux' //  reducersを結合する関数
import { reducer as form } from 'redux-form'
import events from './events'

//  結合するreducersを列挙する
//  例：export default combineReducers({ foo, bar, buzz, count })
export default combineReducers({ events, form })
