const BookHelloKitty = ({titulo, autor, imagem}) => {
    return(
    <div>
        <h3> {titulo} </h3>
        <p> {autor} </p>
        <img src={imagem} alt= 'Capa: As aventuras da Hello kitty' />
    </div>
    )
}

export default BookHelloKitty