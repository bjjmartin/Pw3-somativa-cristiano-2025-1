import './App.css'

import BookHelloKitty from './components/BookHelloKitty'

import  capa_livro from './assets/hello kittyy.jpg'

function App() {
  return (
    <>
      <div>
        <h1> PW3 - WEBAPP - LIVRARIA XIKKAYA!!!!!!! </h1>
        <BookHelloKitty 
        titulo = 'As aventuras da Hello Kitty'
        autor = 'Xikkaya'
        imagem = {capa_livro}/>


         {/* <BookHelloKitty 
        titulo = 'As aventuras de uma fisioterapeuta'
        autor = 'Chatpt'
        imagem = 'Uma imagem vai aparecer aqui'/>

         <BookHelloKitty 
        titulo = 'As aventuras de uma programadora'
        autor = 'Filó'
        imagem = 'Uma imagem vai aparecer aqui'/>


        <BookHelloKitty 
        titulo = 'A grande Família'
        autor = 'Mãe Igor e Pai Petterson '
        imagem = 'Uma imagem vai aparecer aqui'/> */}
      </div>
    </>
  )
}

export default App
