import React from "react";
import styles from './FormsControlls.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

const FormControll = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControll {...props}><textarea {...input} {...restProps}/></FormControll>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControll {...props}><input {...input} {...restProps}/></FormControll>
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field
            name={name}
            component={component}
            type="text"
            placeholder={placeholder}
            validate={validators}
            {...props}
        />
        {text}
    </div>
);

