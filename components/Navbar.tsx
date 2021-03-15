import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/pages/Navbar.module.css';


interface NavbarProps {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;

}


export const Navbar: React.FC<NavbarProps> = ({ instagram, facebook, linkedin, twitter }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function openMenu() { isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) }


    return (
        <nav className={styles.navContainer}>
            <Link href="/"><a ><img src="/images/ocean-logo.svg" alt="ocean logo" /></a></Link>
            <div className={styles.navItems} style={{ transform: isMenuOpen ? "translateY(0px)" : "" }}>
                <li><Link href="/"><a >Home</a></Link></li>
                <li><Link href="/about-us"><a >Sobre Nós</a></Link></li>
                <li><Link href="/work"><a >Trabalhe Conosco</a></Link></li>
                <li><Link href="/team"><a >Equipe</a></Link></li>
                <li><Link href="/contact"><a >Contato</a></Link></li>

                <div>
                    {isMenuOpen ?
                        <div className={styles.navSocialMediaIcons}>
                            <a href={instagram} target="_blank"><img src="/images/icons/instagram.svg" alt="Instagram" /> <p>Instagram</p> </a>
                            <a href={facebook} target="_blank"><img src="/images/icons/facebook.svg" alt="Facebook" /> <p>Facebook</p> </a>
                            <a href={twitter} target="_blank"><img src="/images/icons/twitter.svg" alt="Twitter" /> <p>Twitter</p> </a>
                            <a href={linkedin} target="_blank" ><img src="/images/icons/linkedin.svg" alt="Linkedin" /> <p>Linkedin</p> </a>
                        </div> : " "
                    }
                </div>
            </div>
            
            <i
                onClick={() => {
                    openMenu()
                }}
                className={!isMenuOpen ? "fas fa-bars burger" : "fas fa-times"}>

            </i>
        </nav>
    )
}
