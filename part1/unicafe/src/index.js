import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleOnClick, children }) => (
  <button onClick={handleOnClick}>{children}</button>
)

const Statistic = ({ name, value }) => (
  <p>
    {name} {value}
  </p>
)

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad
  const average = good - bad
  const positive = good / all
  return (
    <div>
      {all > 0 ?
        <>
          <Statistic name="good" value={good} />
          <Statistic name="neutral" value={neutral} />
          <Statistic name="bad" value={bad} />
          <Statistic name="all" value={all} />
          <Statistic name="average" value={average} />
          <Statistic name="positive" value={positive} />
        </>
        :
        "No statistics gathered yet"
      }
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToState = (feedback, feedbackFun) => {
    feedbackFun(feedback + 1)
  }

  return (
    <div>
      <Button handleOnClick={() => addToState(good, setGood)}>Good</Button>
      <Button handleOnClick={() => addToState(neutral, setNeutral)}>Neutral</Button>
      <Button handleOnClick={() => addToState(bad, setBad)}>Bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)