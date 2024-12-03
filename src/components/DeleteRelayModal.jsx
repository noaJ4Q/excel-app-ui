import React from 'react'
import { IoMdClose } from "react-icons/io";

function DeleteRelayModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
        {/* Cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <IoMdClose />
        </button>

        {/* Contenido del modal */}
        <p className="text-lg font-medium text-gray-800 text-center mb-6">
          {message || "¿Seguro que desea realizar esta acción?"}
        </p>

        <div className="flex justify-around">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteRelayModal