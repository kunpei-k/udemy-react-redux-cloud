import React, {Component} from 'react';
import {connect} from 'react-redux';
//  このコンポーネントに必要となるaction creatorsをインポート
import { readEvents } from '../actions';
import _ from 'lodash';


class EventsIndex extends Component {
/*=============================================================================

    stateの初期化を担うconstructor()は、reducersで管理するのでここでは不要！！

    以下のメソッドは、reducersで管理するのでここでは不要！！

=============================================================================*/
    componentDidMount() {
        this.props.readEvents();
    }
    renderEvents() {
        return (
            _.map(this.props.events, event => (
                <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{event.body}</td>
                </tr>
            ))
        )
    }
    render() {
        return (
            <table style={{margin: '100px'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderEvents()}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

//	connect関数で、stateやactionと、それを参照するコンポーネントとの紐付けを行う！引数には紐付けするコンポーネント名を取る
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
