import Button from './Button'

import style from "./BookCard.module.css"

const BookHelloKitty = ({titulo, autor, imagem}) => {
    return(
    <div className= {style.bookCard}>
        <h3 className= {style.titulo}> {titulo} </h3>
        <p className= {style.autor}> {autor} </p>
        <img src={imagem} alt= 'Capa: As aventuras da Hello kitty' />
        <Button label='DETALHE'/>
    </div>
    )
}

export default BookHelloKitty