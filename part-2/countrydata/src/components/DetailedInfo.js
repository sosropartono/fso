const DetailedInfo = ({country}) => {

    return (
        <div>
            <h1>{country.name}</h1>
            <p>languages</p>
            <ul>
                {country.languages.map(language => {
                    return <li>{language.name}</li>
                })}
            </ul>


        </div>
    )
}


export default DetailedInfo