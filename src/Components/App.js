import React, {Component} from 'react';
import {connect} from 'react-redux';
//  このコンポーネントに必要となるaction creatorsをインポート
import {increment, decrement} from '../actions';


class App extends Component {
/*=============================================================================

    stateの初期化を担うconstructor()は、reducersで管理するのでここでは不要！！

    constructor(props) {
        super(props);
        this.state = { count : 0 }
    }


    以下のメソッドは、reducersで管理するのでここでは不要！！

    handlePlus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleMinus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

=============================================================================*/
    render() {
        const props = this.props;

        return (
            <div className="ui" style={{margin:'200px'}}>
                <div>count: {props.value}</div>
                <button onClick={props.increment}>+</button>
                <button onClick={props.decrement}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.count.value
    };
}
// 書き方1
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement())
//     }
// }
// 書き方2
const mapDispatchToProps = { increment, decrement }

//	connect関数で、stateやactionと、それを参照するコンポーネントとの紐付けを行う！引数には紐付けするコンポーネント名を取る
export default connect(mapStateToProps, mapDispatchToProps)(App);
