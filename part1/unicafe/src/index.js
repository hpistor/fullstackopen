import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleOnClick, children }) => (
  <button onClick={handleOnClick}>{children}</button>
)

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>
        Good: {good}
      </p>
      <p>
        Neutral: {neutral}
      </p>
      <p>
        Bad: {bad}
      </p>
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