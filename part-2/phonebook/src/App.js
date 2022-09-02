import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])



  const nameChange = (event) => {
    setNewName(event.target.value)
  }
  const numChange = (event) => {
    setNewNumber(event.target.value)
  }

  const hook = () => {
    console.log("effect")
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log(response)
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  //BUG : filtered variable saves previous filtered "history" 
  // when entering and erasing search
  const filterPeople = (event) => {
    setSearch(event.target.value)
    setFiltered(persons)
    console.log("this is filtered ", filtered)
    const newArr = filtered.filter((person) => {
      return person.name.toLowerCase().includes(search)
    })
    console.log("this is newArr", newArr)
    setFiltered(newArr)

  }


  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.filter((person) => {
      return person.name === newName
    })
    if (names.length > 0) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newObj = {
        name: newName,
        number: newNumber
      }
      const newPersonArr = persons.concat(newObj)
      setPersons(newPersonArr)
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} filterPeople={filterPeople} />


      <h2>Add a New Number</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} nameChange={nameChange} numChange={numChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} filtered={filtered} search={search} />
    </div>
  )
}

export default App


