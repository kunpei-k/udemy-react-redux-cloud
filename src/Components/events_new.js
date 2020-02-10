import React, {Component} from 'react';
import {connect} from 'react-redux';
//  このコンポーネントに必要となるaction creatorsをインポート
// import { postEvents } from '../actions';
import { Link } from 'react-router-dom';


class EventsNew extends Component {
/*=============================================================================

    stateの初期化を担うconstructor()は、reducersで管理するのでここでは不要！！

    以下のメソッドは、reducersで管理するのでここでは不要！！

=============================================================================*/
    render() {
        return (
            <React.Fragment>
                <div>Foo</div>
            </React.Fragment>
        )
    }
}
// const mapDispatchToProps = ({ postEvents })

//	connect関数で、stateやactionと、それを参照するコンポーネントとの紐付けを行う！引数には紐付けするコンポーネント名を取る
export default connect(null, null)(EventsNew);
