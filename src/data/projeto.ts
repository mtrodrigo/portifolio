import agencia from '/img/agencia.png'
import agenciaViagem from '/img/agencia_viagem.png'
import cardapio from '/img/cardapio_restaurant.png'
import calculadora from '/img/calculadora.png'
import frases from '/img/frases.png'

const colProjetos = [
    {
        nome: "Gerador de Frases", 
        site: "https://frases-zeta.vercel.app/", 
        codigo: "https://github.com/mtrodrigo/frases.git",
        image: frases, 
        descricao: "Projeto criado com React e TypeScript usando Hooks para gerar frases aleatórias de acordo com a categoeria escolida."},    
    {
        nome: "Calculadora de combustivel", 
        site: "https://calculadora-combustivel-woad.vercel.app/", 
        codigo: "https://github.com/mtrodrigo/calculadora-combustivel.git", 
        image: calculadora, 
        descricao: "Projeto criado em React JS + Typescript para calcular qual combustível é melhor abastecer."},
    {
        nome: "Cardápio Restaurat", 
        site: "https://cardapio-restaurant-five.vercel.app/", 
        codigo: "https://github.com/mtrodrigo/cardapio-restaurant.git", 
        image: cardapio, descricao: "Projeto criado em React JS com uso de Hooks para filtrar os itens por categoria ou texto."},
    {
        nome: "Agência Design Digital", 
        site: "https://agencia-design-m.vercel.app/", 
        codigo: "https://github.com/mtrodrigo/agencia_design_M.git", 
        image: agencia, 
        descricao:"Projeto criado em React JS com modo claro e modo escuro."},
    {
        nome: "Agencia de Viagem", 
        site: "https://agencia-de-viagens-tau-two.vercel.app/", 
        codigo: "https://github.com/mtrodrigo/Agencia-de-Viagens.git", 
        image: agenciaViagem, 
        descricao: "Projeto criado e HTML e CSS com simulação de envio de dados para um servidor."},    
]
export default colProjetos