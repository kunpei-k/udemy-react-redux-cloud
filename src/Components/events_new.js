import React, {Component} from 'react';
import {connect} from 'react-redux';

//  このコンポーネントに必要となるaction creatorsをインポート
import { postEvent } from '../actions';

import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


class EventsNew extends Component {
/*=============================================================================

    stateの初期化を担うconstructor()は、reducersで管理するのでここでは不要！！

    以下のメソッドは、reducersで管理するのでここでは不要！！

=============================================================================*/
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderField(field) {
        const { input, label, type, meta:{ touched, error } } = field;
        return (
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }
    async onSubmit(values) {
        await this.props.postEvent(values)
        this.props.history.push('/')
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label='Title' name='title' type='text' component={this.renderField}/>
                </div>
                <div>
                    <Field label='Body' name='body' type='text' component={this.renderField}/>
                </div>
                <div>
                    <input type='submit' value='Submit' disabled={false}/>
                    <Link to='/'>Cancel</Link>
                </div>
            </form>
        )
    }
}
const validate = values => {
    const errors = {}
    if (!values.title) errors.title = 'Enter a title, please!'
    if (!values.body) errors.body = 'Enter a body, please!'
    return errors;
}
const mapDispatchToProps = ({ postEvent })

//	connect関数で、stateやactionと、それを参照するコンポーネントとの紐付けを行う！引数には紐付けするコンポーネント名を取る
export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form:'eventNewForm' })(EventsNew)
);
