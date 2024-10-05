import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz App</h1>
      <p className="mb-8">Test your knowledge with our exciting quizzes!</p>
      <Link to="/quiz" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
        Start Quiz
      </Link>
    </div>
  )
}

export default Home