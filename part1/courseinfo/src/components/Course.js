import React from 'react'

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
            <b>Number of exercises {exercises}</b>
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
export default Course