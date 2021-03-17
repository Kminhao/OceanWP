import styles from '../styles/components/Content.module.css';

interface contentProps {
    title: string,
    background?: string;
}


export const Content: React.FC<contentProps> = ({ title, background }) => {
    return (
        <div className={styles.contentContainer} style={{ "background-image ": `url(${background}) ; no-repeat` }}>
            <h4>{title}</h4>
            <div className={styles.content}>
                <div className={styles.homePageContent}>
                    <h2>Layout Page with Next/Typescript</h2>
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum perferendis qui, ab dolor praesentium!</strong>
                    <img src="/images/ocean-energy.svg" alt="" />
                </div>

                <div className={styles.homePageContent}>

                </div>


            </div>
        </div>

    )
}