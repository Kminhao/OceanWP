import Link from 'next/link';
import styles from '../styles/pages/Footer.module.css';

interface FooterProps {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    isHome: boolean;
}

export const Footer: React.FC<FooterProps> = ({ instagram, facebook, linkedin, twitter, isHome }) => {

    console.log(isHome)


    return (

        <footer className={styles.footerContainer} >

            {isHome ? <div className={styles.mainFooter}>

                <div className={styles.footerColunm}>
                    <li><Link href="/"><a >Home</a></Link></li>
                    <li><Link href="/about-us"><a >Sobre Nós</a></Link></li>
                    <li><Link href="/work"><a >Trabalhe Conosco</a></Link></li>
                    <li><Link href="/team"><a >Equipe</a></Link></li>
                    <li><Link href="/contact"><a >Contato</a></Link></li>
                </div>
                <div className={styles.footerColunm}>
                    <li><a href={instagram} target="_blank"><img src="/images/icons/instagram.svg" alt="Instagram" />Instagram</a></li>
                    <li><a href={facebook} target="_blank"><img src="/images/icons/facebook.svg" alt="Facebook" />Facebook</a></li>
                    <li><a href={twitter} target="_blank"><img src="/images/icons/twitter.svg" alt="Twitter" />Twitter</a></li>
                    <li><a href={linkedin} target="_blank"><img src="/images/icons/linkedin.svg" alt="Linkedin" />Linkedin</a></li>
                </div>

            </div> : ""}
            <div className={styles.footerRow}>
                <hr />
                <li><strong>© 2021 Ocean. Nature {"&"} Technology  </strong></li>
            </div>
        </footer>

    )
}

