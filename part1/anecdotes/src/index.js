import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ anecdote, votes }) => (
  <div>
    <p>
      {anecdote}
    </p>
    <p>
      Has {votes} votes.
      </p>
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))

  const generateRandomNumber = len => {
    return Math.floor(Math.random() * len)
  }

  const vote = () => {
    let newVotes = [...votes]
    newVotes[selected]++;
    console.log(newVotes)
    setVotes(newVotes)

  }

  const changeAnecdotes = () => {
    let newIndex = selected
    while (newIndex === selected) {
      newIndex = generateRandomNumber(props.anecdotes.length)
    }
    setSelected(newIndex)
  }

  let maxVotes = Math.max(...votes)
  let indexMaxVotes = votes.indexOf(maxVotes)

  return (
    <div>
      <div>
        <h1>Anecdote of the Day</h1>
        <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
        <p>
          <button onClick={() => vote()}>Vote</button>
          <button onClick={() => changeAnecdotes()}>Next anecdote</button>
        </p>
      </div>
      {maxVotes > 0 && <div>
        <h1>Anecdote with most votes</h1>
        <Anecdote anecdote={props.anecdotes[indexMaxVotes]} votes={votes[indexMaxVotes]} />
      </div>
      }
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)