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
          </div>
          <div className={styles.cards_display}>
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
          </div>
      </section>
    )
  }
  
  export default Projetos
  