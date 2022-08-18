import { useState } from 'react'

const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Button = ({ name, func }) => {
  return (
    <button onClick={func}>{name}</button>

  )
}



const Statistics = (props) => {

  if (props.allClicks.length === 0) {
    return (
      <div><br></br>No feedback given</div>
    )
  }

  return (
    <table>

      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.allClicks.length} />
      <StatisticsLine text="average" value={props.average.toFixed(1)} />
      <StatisticsLine text="positive" value={props.positive.toFixed(1)} />
    </table>


  )
}


const StatisticsLine = (props) => {


  return (
    <tr><td>{props.text}</td> <td>{props.value}</td></tr>
  )


}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const sumAll = good + bad + neutral
  const avg = sumAll / 3

  const goodButtonClicked = () => {
    setAll(allClicks.concat("g"))
    setGood(good + 1)
  }
  const neutralButtonClicked = () => {
    setAll(allClicks.concat("n"))
    setNeutral(neutral + 1)
  }

  const badButtonClicked = () => {
    setAll(allClicks.concat("b"))
    setBad(bad + 1)
  }



  return (
    <div>
      <Header name="give feedback" />
      <Button func={goodButtonClicked} name="good" />
      <Button func={neutralButtonClicked} name="neutral" />
      <Button func={badButtonClicked} name="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} average={avg}
        allClicks={allClicks} positive={good / sumAll * 100} per="%" />



    </div>
  )

}


export default App;
