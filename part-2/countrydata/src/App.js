import { useState, useEffect } from 'react'
import CountryList from './components/CountryList'
import Search from './components/Search'
import DetailedInfo from './components/DetailedInfo'
import axios from 'axios'

const App = () => {

  const [countryList, setCountryList] = useState([])
  const [search, setSearch] =useState('')
  const [filteredCountries, setFiltered] = useState([])

  const hook = () => {
    axios.get(('https://restcountries.com/v2/all')).then((response) => {
      setCountryList(response.data)
    })
  }
  useEffect(hook, [])
  


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
      filteredCountries={filteredCountries} />

    </div>
  )
}


export default App;
