import React from 'react'
import { Link } from 'react-router'

function Topbar() {
  return (
    <>
      <header className="flex justify-between items-center bg-yellow-400 px-6 py-3 shadow-md">
        <div className="text-lg font-bold"> Dashboard </div>
        <div className="flex items-center space-x-4">
          <span>Willy Huallpa</span>
          <Link to="/login">
            <button className="text-sm text-gray-700 underline">Cerrar sesión</button>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Topbar