import ImgSobre from '/img/rodrigo.png'
import style from './Sobre.module.css'

function Sobre() {
    const anoAniversario = 1985; 
    const data = new Date()
    const idade = data.getFullYear() - anoAniversario;


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
                        <p>Olá sou Rodrigo, tenho {idade} anos, sou formado em farmácia desde 2012 e 
                            desde janeiro de 2023 estou estudadando programação para transição de carreira.
                        </p>
                        <p>Fiz curso de iniciação de Front-End e JavaScript pela Trybe, curso de Desenvolvimento Web 
                            (HTML 5, CSS 3, Bootstrap e JavaScript) ministrado Jorge Sant Anna e Jamilton Damasceno, curso de Front-End
                            pela DevMedia (HTML 5, CSS 3,  JavaScript, React e API) e atualmente estou cursando pela Udemy o 
                            curso de React avançado com TypeScript ministrado por Mathaus Fraga. 
                        </p>
                        <p>
                            Atualmente estou a procura de uma vaga como React JS Developer
                        </p>
                    </div>
                </div> 
            </div>
        </section>
      </>
    )
  }
  
  export default Sobre