import { InputHTMLAttributes } from 'react';
import styles from '../styles/components/Input.module.css';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}


export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
    return (
        <div className={styles.inputBlock}>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />

        </div>
    )
}