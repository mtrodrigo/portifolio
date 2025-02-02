import style from './Banner.module.css'

function Banner() {
  
    return (
      <>
        <section className={style.banner}>
            <div className={style.texto_container}>
                <h1>HELLO WORD!</h1>
                <h3>Bem vindo ao meu portifólio</h3>
                <h3>Rodrigo Marques Tavares</h3>
                
            </div>
        </section>
      </>
    )
  }
  
  export default Banner