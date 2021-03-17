import Head from "next/head";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import { Navbar } from "../components/Navbar";
import styles from '../styles/pages/Home.module.css';


export default function Contact() {
    return (

        <div className={styles.container}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
                <title>Ocean | Contact</title>
            </Head>
            <Navbar
                facebook="https://facebook.com"
                instagram="https://instagram.com"
                linkedin="https://linkedin.com"
                twitter="https://twitter.com"
            >
            </Navbar>

            <div className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <h2>Entre em contato com o nosso time!</h2>
                </div>

                <div className={styles.contactContent}>
                    <div className={styles.contactFormCard}>
                        <Input name="nome" label="Seu Nome"></Input>
                        <Input name="email" label="Email"></Input>
                        <Input name="empresa" label="Empresa"></Input>
                    </div>

                    <div className={styles.contactAboutCard}>
                        <h2>Ou fale conosco diretamente por:</h2>
                        <a href="whatsapp://send?abid=012982642452&text=Hello%2C%20World!"><img src="/images/icons/whatsapp.svg" alt="whatsapp logo"/>Whatsapp</a>
                        <a href=""><img src="/images/icons/messenger.svg" alt="whatsapp logo"/> Messenger</a>
                    </div>


                </div>
            </div>


            <Footer
                isHome={false}
            >

            </Footer>

        </div>



    )
}