import React from "react";
import {maxLenghtCreator, required} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControlls/FormsControlls";

const maxLenght50 = maxLenghtCreator(50);

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder='Enter your message'
                       validate={[required, maxLenght50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
