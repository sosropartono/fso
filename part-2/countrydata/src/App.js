import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {

  const [countryList, setCountryList] = useState([])

  const hook = () => {
    axios.get(('https://restcountries.com/v2/all')).then((response) => {
      console.log(response.data)
      setCountryList(response.data)

    })
  }
  useEffect(hook, [])



  return (
    <div>
      <p>hello</p>

    </div>
  )
}


export default App;
