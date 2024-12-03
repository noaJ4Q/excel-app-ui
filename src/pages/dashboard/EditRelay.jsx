import React from 'react'
import Topbar from '../../components/Topbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'

import { Link } from 'react-router'

function Edit() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-100 flex flex-col">
          <Topbar />
          <div className="flex flex-col p-6">
            <div className="bg-white shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-700 mb-6">
                Editar relé
              </h1>
              <form className="grid grid-cols-2 gap-4">
                {/* Código Interno */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Código Interno:
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="RP-X"
                  />
                </div>
                {/* Código COES */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Código COES:
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="RXX"
                  />
                </div>
                {/* Central / Subestación */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Central / Subestación:
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                {/* Código Equipo Protegido */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Código Equipo Protegido:
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                {/* Interruptor Principal Asociado */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Interruptor Principal Asociado:
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                {/* Otros Interruptores Asociados */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Otros Interruptores Asociados:
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </form>
              {/* Botones */}
              <div className="flex justify-end mt-6">
                <Link
                  to="/dashboard"
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-400 mr-4"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Edit