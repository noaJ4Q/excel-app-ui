import React from 'react'

function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="px-6 py-4 text-lg font-bold">Menú</div>
        <div className="px-6 py-2 text-sm border-t border-gray-600">FILTRO</div>
        <div className="px-6 py-2">
          <label className="block text-sm">Función</label>
          <select className="w-full mt-1 px-2 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option value="">Select...</option>
          </select>
        </div>
        <div className="px-6 py-2">
          <label className="block text-sm">Marca</label>
          <select className="w-full mt-1 px-2 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option value="">Select...</option>
          </select>
        </div>
        <div className="px-6 py-2">
          <label className="block text-sm">Sala</label>
          <select className="w-full mt-1 px-2 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option value="">Select...</option>
          </select>
        </div>
        <div className="px-6 py-2 flex space-x-2">
          <button className="flex-1 bg-gray-600 text-white py-1 rounded-md hover:bg-gray-500">
            Resetear
          </button>
          <button className="flex-1 bg-yellow-500 text-black py-1 rounded-md hover:bg-yellow-400">
            Filtrar
          </button>
        </div>
        {/* <div className="px-6 py-2 text-sm border-t border-gray-600">INVENTARIO</div> */}
        {/* <div className="px-6 py-2 text-sm">CONFIGURACIÓN</div> */}
      </aside>
    </>
  )
}

export default Sidebar