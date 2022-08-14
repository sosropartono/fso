
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundementals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />

      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}


const Header = (props) => {
  return (
    <div>
      <h1>
        Course: {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Part {props.part1} Number of exercises: {props.exercises1}</p>
      <p>Part {props.part2} Number of exercises: {props.exercises2}</p>
      <p>Part {props.part3} Number of exercises: {props.exercises3}</p>
    </div>
  )

}
const Total = (props) => {
  return (
    <div>
      <h1>
        Total Number of exercises: {total}

      </h1>
    </div>
  )

}

export default App;
