//  actionのtyoeをまずはインポート
import { INCREMENT, DECREMENT } from '../actions'

//  stateの初期値を定義
const initialState = { value: 0 }
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value:state.value + 1 }
            break;
        case DECREMENT:
            return { value:state.value - 1 }
            break;
        default:
            return state
    }
}
