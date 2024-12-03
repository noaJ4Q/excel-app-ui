import React from 'react'
import orygenLogo from "../../assets/orygen_logo.png"
import { Link } from 'react-router'

function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-slate-300 p-8 rounded-lg shadow-md w-80">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Usuario"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="text-center mb-6">
              <a
                href="#"
                className="text-sm text-gray-700 hover:underline"
              >
                Recuperar contraseña
              </a>
            </div>
            <div>
              <Link to="/dashboard">
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="absolute bottom-4 right-4">
          <img
            src={orygenLogo}
            alt="Orygen"
            className="h-36 me-4"
          />
        </div>
      </div>
    </>
  )
}

export default Login