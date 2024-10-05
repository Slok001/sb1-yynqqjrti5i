import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Result: React.FC = () => {
  const location = useLocation()
  const { score, totalQuestions } = location.state as { score: number; totalQuestions: number }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Quiz Results</h2>
      <p className="text-xl mb-4">
        You scored {score} out of {totalQuestions}
      </p>
      <p className="mb-8">
        {score === totalQuestions
          ? "Perfect score! Congratulations!"
          : score > totalQuestions / 2
          ? "Great job! You did well."
          : "Keep practicing. You can do better!"}
      </p>
      <Link to="/home" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
        Back to Home
      </Link>
    </div>
  )
}

export default Result