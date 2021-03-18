import React, { TextareaHTMLAttributes } from 'react';
import styles from '../styles/components/Textarea.module.css';


interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    placeholder: string;
}


export const Textarea: React.FC<TextareaProps> = ({ name, label, placeholder, ...rest }) => {

    return (
        <div className={styles.textareaBlock}>
            <label htmlFor={name}> {label} </label>
            <textarea placeholder={placeholder} id={name} {...rest} />
        </div>
    )
}