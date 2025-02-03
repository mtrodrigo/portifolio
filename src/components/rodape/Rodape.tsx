import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import styles from './Rodape.module.css'

function Rodape() {
  
    return (
      <footer id="contato" className={styles.footer}>
        <section className={styles.tx_container}>
            <h2>Contatos</h2>
        </section>
        <section className={styles.links_container}>
            <span><CiLinkedin/></span><a href="https://www.linkedin.com/in/rodrigo-marques-tavares-9482b4226/" target="_blanck">Linkedin</a>
            <span><FaWhatsapp/></span><a href="https://wa.me/5535984061841" target="_blanck">WhatsApp</a>
            <span><MdOutlineEmail/></span><a href="mailto:rodrigour@gmail.com" target="_blanck">Email</a>
            <span><FaGithub/></span><a href="https://github.com/mtrodrigo" target="_blanck">GitHub</a>
        </section>
        <section className={styles.tecno_container}>
            <div className={styles.tecno_text}>
                <h3>Tecnologias</h3>
            </div>
            <div className={styles.tecno_img}>
                <img src="/icons/html5.png" alt="icone html 5" />
                <img src="/icons/css3.png" alt="icone css 3" />
                <img src="/icons/javascript.png" alt="icone javascript" />
                <img src="/icons/react.png" alt="icone react" />
                <img src="/icons/typescript.png" alt="icone typescript" />
                <img src="/icons/github.png" alt="icone github" />
                <img src="/icons/git.png" alt="icone git" />

            </div>    
        </section>
        <section className={styles.criador}>
            <p>© 2025 - Todos os direitos reservados</p>
            <p>Criado por <strong>Rodrigo Marques Tavares</strong></p>
        </section>
      </footer>
    )
  }
  
  export default Rodape