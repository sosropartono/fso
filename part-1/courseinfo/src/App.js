
const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundementals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7

      },
      {
        name: "State of a component",
        exercises: 14

      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div >
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )

}
const Total = (props) => {
  return (
    <div>
      <p>
        Total Number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}

      </p>
    </div>
  )

}

export default App;
