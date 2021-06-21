import Film from './Film'

const FilmList = ({films}) => {
    
    const filmNodes = films.map(film => {
        return(
            <Film key={film.id} name={film.name} url={film.url}/>
        )
    })


    return (
        <>
            {filmNodes}
        </>

    )
}

export default FilmList;