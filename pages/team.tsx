import Head from "next/head";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Team.module.css';


export default function Team() {
    return (

        <div className={styles.container}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
                <title>Ocean | Team</title>
            </Head>
            <Navbar
                facebook="https://facebook.com"
                instagram="https://instagram.com"
                linkedin="https://linkedin.com"
                twitter="https://twitter.com"
            >
            </Navbar>


            <h2>Essas são as pessoas responsáveis por tornar seu projeto realidade!</h2>

            <div className={styles.profilesContainer}>
                <Profile nome="Gabriel Freitas" cargo="Chefe de Desenvolvimento" image="https://avatars.githubusercontent.com/u/36238020?s=460&u=030ae639abf7b6752c7dca378e05664eeed85422&v=4" linkedin="https://www.linkedin.com/in/gabriel-freitas-98250415a/" github="https://github.com/kminhao"></Profile>
                <Profile nome="Oscarito" cargo="Country Manager" image="https://media-exp1.licdn.com/dms/image/C4E03AQEjJMKL8EhM9A/profile-displayphoto-shrink_800_800/0/1539746212192?e=1621468800&v=beta&t=Zav89kfEH63acnIvqlcCMN32WqpLmWGVLwhQYGVdqRo" linkedin="https://www.linkedin.com/in/omartinez/"></Profile>
                <Profile nome="Murilo Games" cargo="Gerente de Projetos" image="https://avatars.githubusercontent.com/u/23124330?s=400&u=cd087613405ea9bcc1aa64129b191a6b7624f83a&v=4" linkedin="https://www.linkedin.com/in/gomes343/" github="https://github.com/Gomes343"></Profile>

            </div>

            <Footer
                isHome={false}
            >

            </Footer>


        </div>



    )
}