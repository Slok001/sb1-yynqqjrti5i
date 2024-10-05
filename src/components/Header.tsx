import React from 'react'
import { Link } from 'react-router-dom'
import { Home, User } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold">Quiz App</Link>
        <nav>
          <Link to="/home" className="mr-4"><Home size={24} /></Link>
          <Link to="/profile"><User size={24} /></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header