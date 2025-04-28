import ImgSobre from "/img/rodrigo.png";
import style from "./Sobre.module.css";

function Sobre() {
  return (
    <>
      <section className={style.sobre}>
        <div id="sobre" className={style.sobre_container}>
          <div className={style.img_text_container}>
            <div className={style.img_container}>
              <img src={ImgSobre} alt="" />
            </div>
            <div className={style.text_container}>
              <p>
                Meu nome é Rodrigo Marques Tavares, tenho 40 anos e sou formado
                em farmácia desde 2012. Desde janeiro de 2024, estou estudando
                programação com intuito de fazer uma transição de carreira para
                área de desenvolvimento web.
              </p>
              <p>
                Sou apaixonado por tecnologia e sempre busco aprender novas
                linguagens e frameworks. Tenho experiência em HTML, CSS,
                JavaScript, TypeScript, React e Node.js.
              </p>
              <p>
                Atualmente, sou desenvolvedor full stack freelancer,
                desenvolvendo projetos pessoais e para clientes. Estou sempre em
                busca de novos desafios e oportunidades para crescer
                profissionalmente.
              </p>
              <p>
                Estou aberto a novas oportunidades e desafios. Se você está
                procurando um desenvolvedor web dedicado e apaixonado, entre em
                contato comigo!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;
