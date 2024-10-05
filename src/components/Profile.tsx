import React from 'react'

const Profile: React.FC = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    quizzesTaken: 5,
    averageScore: 80
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>
      <div className="space-y-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Quizzes Taken:</strong> {user.quizzesTaken}</p>
        <p><strong>Average Score:</strong> {user.averageScore}%</p>
      </div>
    </div>
  )
}

export default Profile