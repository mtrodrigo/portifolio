import styles from './Topo.module.css'

function Topo() {
  
    return (
      <header className={styles.topo}>
        <section className={styles.topo_container}>    
            <div className={styles.titulo_container}>
                <h1>Rodrigo Marques Tavares</h1>
            </div>
            <nav className={styles.link_container}>
                <a href='#sobre'>Sobre</a>
                <a href='#projetos'>Projetos</a>
                <a href='#contato'>Contato</a>
            </nav>
            <div className={styles.btn_container}>
                <button>pt-BR</button>
            </div>
        </section>
      </header>
    )
  }
  
  export default Topo