//  データをより扱いやすく作り替える(配列 → オブジェクトへ)パッケージをインポート
import _ from 'lodash'
//  actionのtypeをまずはインポート
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
        // console.log(action.response.data);
        // console.log(_.mapKeys(action.response.data, 'id'));
            return _.mapKeys(action.response.data, 'id')
            break;
        default:
            return events
    }
}
