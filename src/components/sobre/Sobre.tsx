import ImgSobre from '/img/rodrigo.png'
import style from './Sobre.module.css'

function Sobre() {
    const anoAniversario = 1985;
    const anoTrabalho = 2012; 
    const data = new Date()
    const idade = data.getFullYear() - anoAniversario;
    const trabalho = data.getFullYear() - anoTrabalho


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
                        <p>Olá sou Rodrigo, tenho {idade} anos, sou formado em farmácia desde 2012, 
                            trabalhei como gestor farmaceutico por {trabalho} anos e 
                            desde janeiro de 2023 estou estudadando programação para transição de carreira.
                            Tenho como hobby fazer trilha de moto nos fins de semana.
                        </p>
                        <p>Fiz curso de iniciação de Front-End e JavaScript pela Trybe, curso de Desenvolvimento Web 
                            (HTML 5, CSS 3, Bootstrap e JavaScript) ministrado Jorge Sant Anna e Jamilton Damasceno, curso de Front-End
                            pela DevMedia (HTML 5, CSS 3,  JavaScript, React e API) e curso pela Udemy o 
                            curso de React avançado com TypeScript ministrado por Mathaus Fraga. 
                        </p>
                        <p>
                            Atualmente estou a procura de uma vaga como <strong>React JS Developer</strong>
                        </p>
                    </div>
                </div> 
            </div>
        </section>
      </>
    )
  }
  
  export default Sobre