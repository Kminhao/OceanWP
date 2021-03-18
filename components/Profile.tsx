import styles from '../styles/components/Profile.module.css';


interface profileProps {
    nome: string;
    cargo: string;
    image: string;
    linkedin?: string;
    github?: string;


}

export const Profile: React.FC<profileProps> = ({ nome, cargo, image, linkedin, github }) => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileCard}>
                {/* <img src={`/images/profiles/${image}.png`} alt="" /> */}
                <img src={image} alt="" />
                <h2>{nome}</h2>
                <strong>{cargo}</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde deleniti excepturi expedita, delectus officiis.</p>
                <div className={styles.socialMedia}>
                    <a href={linkedin} target="_blank"><img src="/images/coloredIcons/linkedin.svg" alt="Linkedin" /></a>
                    {github ? <a href={github} target="_blank"><img src="/images/icons/github.svg" alt="Linkedin" /></a> : " "}
                </div>

            </div>
        </div>
    )
}