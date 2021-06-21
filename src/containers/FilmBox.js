import {useState} from 'react'
import FilmList from '../components/FilmList'
import FilmForm from './FilmForm'

const FilmBox = () => {

    const addFilm = (submittedFilm) => {
        submittedFilm.id = Date.now();
        const updatedFilms = [...films, submittedFilm]
        setFilms(updatedFilms)
    }

    const [films, setFilms] = useState(
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
        ]
    )
    
    return(
        <>
            <h1>Upcoming Film Releases</h1>
            <FilmList films={films}/>
            <h2><a href='https://www.imdb.com/calendar/?region=gb'>View Movie Calendar</a></h2>
            <FilmForm onFilmSubmit={(film) => {addFilm(film)}}/>
        </>
    )
}

export default FilmBox;