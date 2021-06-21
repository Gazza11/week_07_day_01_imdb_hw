const Film = ({url, name}) => {
    return (
        <>
            <h4><a href={url} target='_blank'>{name}</a></h4>
        </>
    )

}

export default Film;