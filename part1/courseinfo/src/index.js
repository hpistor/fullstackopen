import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    {parts.map(part => (
      <Part key={part.id} part={part.name} exercises={part.exercises} />
    ))}
  </>
)

const Total = ({ parts }) => {

  const exercises = parts.reduce((agg, cur) => agg += cur.exercises, 0)
  return (
    <p>
      Number of exercises {exercises}
    </p>
  )
}

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>

)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))