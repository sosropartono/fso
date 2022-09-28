import { useState, useEffect } from 'react'
import CountryList from './components/CountryList'
import Search from './components/Search'
import axios from 'axios'

const App = () => {

  const [countryList, setCountryList] = useState([])
  const [search, setSearch] =useState('')
  const [filteredCountries, setFiltered] = useState([])
  const [show, setShow] = useState('')

  const api_key = process.env.REACT_APP_API_KEY
  const lat = 3.1
  const lon = 3.2



  const hook = () => {
    axios.get(('https://restcountries.com/v2/all')).then((response) => {
      console.log(response.data)
      setCountryList(response.data)
    })
  }
  useEffect(hook, [])


  //had an issue deciding on where I can use the show button and render the DetailedInfo component, since I cannot pass the country argument
  //Solution that worked was to set the button id to the name then filter teh countries to include that name which then renders the detailed component
  // as the requirement to render that component is set to whenever filteredCountries is 1

  const showButtonClicked = (event) => {
    console.log(String(event.target.id))
    const newArr = countryList.filter((country) => {
      return country.name.toLowerCase().includes(event.target.id.toLowerCase())
    })
    setFiltered(newArr)

    }



  


  const filterCountry = (event) => {
    if(search == ''){
      setFiltered(countryList)
    }
    setSearch(event.target.value.toLowerCase())
    const newArr = countryList.filter((country) => {
      return country.name.toLowerCase().includes(search)
    })
    setFiltered(newArr)
  }


  return (
    <div>

      <Search filterCountry={filterCountry}/>
      <CountryList countryList={countryList} 
      filteredCountries={filteredCountries} 
      show={showButtonClicked} useEffect={useEffect}
      api_key={api_key}/>

    </div>
  )
}


export default App;
