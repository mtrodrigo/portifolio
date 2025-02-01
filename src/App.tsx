import Topo from './components/topo/Topo'
import Banner from './components/banner/Banner'
import './App.css'
import Sobre from './components/sobre/Sobre'
import Projetos from './components/projetos/Projetos'

function App() {
  

  return (
    <>
      <Topo/>
      <main className='.main'>
        <Banner/>
        <Sobre/>
        <Projetos/>
      </main>
    </>
  )
}

export default App
