import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]



  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const [anec, setAnec] = useState("")
  const [allClicks, setClicks] = useState(0)
  const anecdoteOTD = "Anecdote of the day"
  const anecdoteMostVotes = "Most popular Anecdote"

  const changeSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }


  const voteSelected = () => {
    const copy = {
      ...votes
    }
    copy[selected] += 1
    setClicks(allClicks + 1)
    setVotes(copy)
    setAnec(anecdotes[findHighestVoted()])
  }

  const findHighestVoted = () => {
    const values = (Object.values(votes))
    let max = Math.max(...values)
    for (const key in votes) {
      if (max == votes[key]) {
        return key
      }
    }

  }


  return (

    <div>
      <Header headerText={anecdoteOTD} />
      {anecdotes[selected]}
      <DisplayVotes val={votes} selected={selected} />

      <div>
        <Button func={voteSelected} buttonLabel="vote" />
        <Button func={changeSelected} buttonLabel="next anecdote" />
      </div>

      <Header headerText={anecdoteMostVotes} />
      <DisplayMostVoted anec={anec} allClicks={allClicks} />





    </div>
  )

}

const Button = (props) => {
  return (
    <button onClick={props.func}>{props.buttonLabel}</button>
  )
}

const DisplayVotes = (props) => {
  return (
    <div><p>{props.val[props.selected]}</p></div>

  )
}

const DisplayMostVoted = (props) => {

  if (props.allClicks == 0) {
    return (
      <div></div>
    )
  } else {
    return (
      <div>{props.anec}</div>
    )
  }
}

const Header = (props) => {

  return (
    <h1>{props.headerText}</h1>
  )
}

export default App
