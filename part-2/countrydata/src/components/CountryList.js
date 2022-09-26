import DetailedInfo from "./DetailedInfo"

const CountryList = ({search, countryList, filteredCountries}) => {
    console.log(filteredCountries)
    if (filteredCountries.length > 10){
        return (
            <p>Too many countries, please specify</p>
        )
    }
    if (filteredCountries.length == 1){
        console.log(filteredCountries[0])
        return (
            <div>

                <DetailedInfo country={filteredCountries[0]} />
            </div>
        )
    }
    return (
            <div>
                {filteredCountries.map((country) => {
                    return <div>
                        {country.name}
                    </div>
                }) }
            </div>
        )
    
}


export default CountryList