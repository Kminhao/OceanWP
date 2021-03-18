import styles from '../styles/components/Button.module.css';


interface ButtonProps {

}


export const Button: React.FC<ButtonProps> = ({ }) => {
    return (
        <div className={styles.buttonBlock}>
            <p><img src="/images/icons/warning.svg" alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados
                </p>
        </div>
    )

}