const Film = ({url, name}) => {
    return (
        <>
            <li className='single-items'><a href={url} target='_blank'>{name}</a></li>
        </>
    )

}

export default Film;