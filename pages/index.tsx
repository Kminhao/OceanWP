import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import styles from '../styles/pages/Home.module.css';
import { Content } from '../components/Content';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
        <title>Ocean | Home</title>
      </Head>


      <div className={styles.homeContainer}>
        <Navbar

          facebook="https://facebook.com"
          instagram="https://instagram.com"
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"

        >

        </Navbar>

        <div className={styles.homeHeader}>
          <strong>Desenvolver o seu projeto nunca foi tão fácil!</strong>
          <h3>Entre em contato conosco e vamos tirar as suas ideias do papel!</h3>

          <Link href="/contact"><button type="button">Fale Conosco</button></Link>

        </div>
        <div className={styles.homeHeader}>
          <h2>Apenas extendendo</h2>
        </div>
        <div className={styles.homeHeader}>
          <h2>Apenas extendendo</h2>
        </div>


        <Footer
          facebook="https://facebook.com"
          instagram="https://instagram.com"
          linkedin="https://linkedin.com"
          twitter="https://twitter.com"
          isHome={true}
        >


        </Footer>


      </div>






    </div>
  )
}
