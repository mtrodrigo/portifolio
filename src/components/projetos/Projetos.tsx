import styles from './Projetos.module.css'
import colProjetos from '../../data/projeto'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useRef } from 'react';

function Projetos() {
  const carrocel = useRef<HTMLDivElement>(null)
  const btnEsquerda = () => {
    if (carrocel.current) {
      carrocel.current.scrollLeft -= carrocel.current.offsetWidth
    }
  }
  const btnDireita = () => {
    if (carrocel.current) {
      carrocel.current.scrollLeft += carrocel.current.offsetWidth
    }
  }

    return (
      <section id='projetos' className={styles.projetos}>
        <div className={styles.projetos_container}>  
          <div className={styles.projetos_titulo}>
            <h2>Projetos</h2>
            <h4>Número de projetos postados: {colProjetos.length}</h4>
          </div>
          <div className={styles.carrocel_container } ref={carrocel}>
          {colProjetos.map((projeto, index) => (
            <div key={index} className={styles.card}>
              <h4>{projeto.nome}</h4>
              <img src={projeto.image} alt={projeto.nome} />
              <p>{projeto.descricao}</p>
              <div className={styles.links_container}>
                <a href={projeto.site} target='_blank'>Projeto</a>
                <a href={projeto.codigo} target='_blank'>Código</a>
              </div>
            </div>
          ))}
          </div>
          <div className={styles.scroll}>
            <button onClick={btnEsquerda}><FaAngleLeft/></button>
            <button onClick={btnDireita}><FaAngleRight/></button>
           </div>
        </div>
      </section>
    )
  }
  
  export default Projetos
  