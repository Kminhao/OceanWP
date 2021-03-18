import Head from "next/head";
import { Button } from "../components/Button";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import { Navbar } from "../components/Navbar";
import { Textarea } from "../components/Textarea";
import styles from '../styles/pages/Contact.module.css';


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
                        <Textarea name="descricao" label="Descrição" placeholder="Nos conte o que você precisa ;)" ></Textarea>
                        <div className={styles.contentButton}>
                            <p><img src="/images/icons/warning.svg" alt="Aviso importante" />
                                Importante! <br />
                                Preencha todos os dados
                                </p>
                            <button type="button">Enviar</button>
                        </div>
                    </div>

                    <div className={styles.contactAboutCard}>
                        <h2>Ou fale conosco diretamente por:</h2>
                        <a href="whatsapp://send?abid=012982642452&text=Hello%2C%20World!"><img src="/images/icons/whatsapp.svg" alt="whatsapp logo" />Whatsapp</a>
                        <a href=""><img src="/images/icons/messenger.svg" alt="whatsapp logo" /> Messenger</a>
                        <h2>Estamos esperando o seu contato!</h2>

                        <div className={styles.contactSocialMedia}>
                            <li><a href="" target="_blank"><img src="/images/coloredIcons/instagram.svg" alt="Instagram" /></a></li>
                            <li><a href="" target="_blank"><img src="/images/coloredIcons/facebook.svg" alt="Facebook" /></a></li>
                            <li><a href="" target="_blank"><img src="/images/coloredIcons/twitter.svg" alt="Twitter" /></a></li>
                            <li><a href="" target="_blank"><img src="/images/coloredIcons/linkedin.svg" alt="Linkedin" /></a></li>
                        </div>





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