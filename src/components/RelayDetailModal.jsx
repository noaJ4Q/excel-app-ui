import React from 'react'
import { IoMdClose } from "react-icons/io";

function RelayDetailModal({ isOpen, onClose, relay }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        {/* Header */}
        <div className="bg-yellow-400 px-4 py-2 flex justify-between items-center rounded-t-lg">
          <span className="font-bold">Detalles del Relé</span>
          <button
            onClick={onClose}
            className="text-black font-bold hover:text-red-600"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Empresa propietaria:</span>
            <span>{relay.empresa == "NaN" ? "No disponible" : relay.empresa}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Código Empresa:</span>
            <span>{relay.codemp == "NaN" ? "No disponible" : relay.codemp}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Subestación:</span>
            <span>{relay.cod_subest_x_emp == "NaN" ? "No disponible" : relay.cod_subest_x_emp}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Ubicación:</span>
            <span>{relay.ubicacion == "Nan" ? "No disponible" : relay.ubicacion}</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="font-bold">Equipo protegido:</span>
            <span>{relay.eq_proteg_nom}</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="font-bold">Código equipo protegido:</span>
            <span>{relay.eq_prot_cod}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-2 bg-gray-100 rounded-b-lg">
          <button
            onClick={onClose}
            className="w-full bg-yellow-400 py-2 rounded-md text-black font-bold hover:bg-yellow-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default RelayDetailModal