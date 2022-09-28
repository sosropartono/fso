import { useState, useEffect } from 'react'
import axios from 'axios'



const DetailedInfo = ({country, api_key}) => {

    const [info, setInfo] = useState('')
    const hook1 = () => {
        axios.get((`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`)).then((response) => {
            setInfo(response.data)
        })
      }
      useEffect(hook1, [])

    
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Languages</p>
            <ul>
                {country.languages.map((language,i) => {
                    return <li> {language.name}</li>
                })}
            </ul>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>


            <img src={country.flag} width="200px" alt="nothing shown" />
 
            <div>weather
            </div>

            


        </div>
    )
}


export default DetailedInfo