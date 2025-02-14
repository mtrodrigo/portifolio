import ImgSobre from '/img/rodrigo.png'
import style from './Sobre.module.css'

function Sobre() {
    return (
      <>
        <section className={style.sobre}>
            <div id='sobre' className={style.sobre_container}>
                <h2>Um pouco sobre mim</h2>
                <div className={style.img_text_container}> 
                    <div className={style.img_container}>
                        <img src={ImgSobre} alt="" />
                    </div>
                    <div className={style.text_container}>
                        <p>
                            Olá! Sou Rodrigo, estou em transição de carreira para desenvolvedor web, tenho 39 anos e sou formado
                            em farmácia desde 2012, onde atuei como gestor farmacêutico por 13 anos. Desde janeiro de 2024,
                            decidi seguir meu sonho na área de programação e estou me dedicando a essa nova jornada.
                        </p>
                        <p>
                            Para me preparar, completei diversos cursos, incluindo iniciação em Front-End e JavaScript pela 
                            Trybe, Desenvolvimento Web (HTML 5, CSS 3, Bootstrap e JavaScript) com Jorge Sant Anna e Jamilton 
                            Damasceno, além do curso de Front-End pela DevMedia, que abrange HTML 5, CSS 3, JavaScript, 
                            React e API. Recentemente, também finalizei o curso avançado de React com TypeScript na Udemy, 
                            ministrado por Matheus Fraga e sempre estou fazendo novos cursos para me aprimorar cada vez mais.
                        </p>
                        <p>
                            Estou animado para aplicar minhas habilidades em projetos desafiadores e contribuir para o mundo da tecnologia!
                        </p>
                    </div>
                </div> 
            </div>
        </section>
      </>
    )
  }
  
  export default Sobre