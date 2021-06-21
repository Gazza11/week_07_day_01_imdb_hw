import Film from './Film'

const FilmList = ({films}) => {
    
    const filmNodes = films.map(film => {
        return(
            <Film key={film.id} name={film.name} url={film.url}/>
        )
    })


    return (
        <>
            <div className='list-items'>
                {filmNodes}
            </div>
        </>

    )
}

export default FilmList;