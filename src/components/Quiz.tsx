import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Mock quiz data
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  }
]

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const navigate = useNavigate()

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      navigate('/result', { state: { score, totalQuestions: quizData.length } })
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Question {currentQuestion + 1}</h2>
      <p className="mb-4">{quizData[currentQuestion].question}</p>
      <div className="space-y-2">
        {quizData[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full text-left p-2 border rounded-md hover:bg-blue-100"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Quiz