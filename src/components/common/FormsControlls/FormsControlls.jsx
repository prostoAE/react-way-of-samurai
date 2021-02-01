import React from "react";
import styles from './FormsControlls.module.css'

const FormControll = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
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
