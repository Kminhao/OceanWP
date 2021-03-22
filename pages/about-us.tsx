import Head from "next/head";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from '../styles/pages/AboutUs.module.css';


export default function AboutUs() {
    return (

        <div className={styles.container}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
                <title>Ocean | About us</title>
            </Head>
            <Navbar

                facebook="https://facebook.com"
                instagram="https://instagram.com"
                linkedin="https://linkedin.com"
                twitter="https://twitter.com"

            >

            </Navbar>

            <div className={styles.aboutUsContainer}>
                <h2>Ainda estamos desenvolvendo essa parte ;)</h2>
            </div>

            <Footer
                isHome={false}
            >

            </Footer>

        </div>



    )
}