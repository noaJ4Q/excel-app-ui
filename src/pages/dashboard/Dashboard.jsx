import React from 'react'
import Sidebar from '../../components/Sidebar.jsx'
import Topbar from '../../components/Topbar.jsx';
import RelayDetailModal from '../../components/RelayDetailModal.jsx';
import DeleteRelayModal from '../../components/DeleteRelayModal.jsx';

import { FaEye, FaRegFile } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";

import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ImportDataModal from '../../components/ImportDataModal.jsx';

function Dashboard() {

  // const data = [
  //   { id: 1, central: "CH Chimay", codigo: "Brindisi", interruptores: "IN-C1 / IN-C2 / IN-AB" },
  //   { id: 2, central: "1001 Miyakonjo Lane", codigo: "Taizz", interruptores: "67924" },
  //   { id: 3, central: "1002 Ahmadnagar Manor", codigo: "Huixquilucan", interruptores: "93026" },
  //   { id: 4, central: "1003 Qinhuangdao Street", codigo: "Purwakarta", interruptores: "25972" },
  //   { id: 5, central: "1006 Santa Brbara dOeste Manor", codigo: "Owo", interruptores: "36229" },
  // ]
  const BACKEND_SERVER = "http://localhost:8000/data";

  const [selectedRelay, setSelectedRelay] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isImportModelOpen, setImportModelOpen] = useState(false);
  const [isDataUploaded, setDataUploaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BACKEND_SERVER);
        if (!response.ok) {
          throw new Error("No se pudo obtener la información");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Solicitud completada");
      }
    }
    fetchData();
  }, [isDataUploaded]);


  const handelOpenModal = (relay) => {
    setSelectedRelay(relay);
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setSelectedRelay(null);
    setModalOpen(false);
  }

  const handleDelete = () => {
    console.log("Eliminando relé");
  }

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 flex flex-col">

          <Topbar />
          {/* Table Section */}
          <div className="p-6 flex-1 overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                <Link to="/dashboard/create">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400">
                    Agregar Nuevo
                  </button>
                </Link>
                <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                  Exportar
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300" onClick={() => setImportModelOpen(true)}>
                  Importar
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Buscar relé de protección"
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                  <FaSearch />
                </button>
              </div>
            </div>
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Acción</th>
                  <th className="px-4 py-2 text-left">Subestación</th>
                  <th className="px-4 py-2 text-left">Función principal</th>
                  <th className="px-4 py-2 text-left">Equipo protegido</th>
                </tr>
              </thead>
              <tbody>
                {data.map((relay) => (
                  <tr key={relay.id} className="border-t">
                    <td className="px-4 py-2">
                      <div className="flex space-x-2">
                        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400" onClick={() => handelOpenModal(relay)}>
                          <FaEye />
                        </button>
                        <Link to={`/dashboard/edit/${relay.id}`}>
                          <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-400">
                            <MdOutlineModeEdit />
                          </button>
                        </Link>
                        <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-400" onClick={() => setDeleteModalOpen(true)}>
                          <FaRegTrashAlt />
                        </button>
                        <button className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-400">
                          <FaRegFileExcel />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2">{relay.cod_subest_x_emp == "NaN" ? "No disponible" : relay.cod_subest_x_emp}</td>
                    <td className="px-4 py-2">{relay.tipo_fun_princ}</td>
                    <td className="px-4 py-2">{relay.eq_proteg_nom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <RelayDetailModal isOpen={isModalOpen} onClose={() => handleCloseModal()} relay={selectedRelay} />
      <DeleteRelayModal isOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDelete} />
      <ImportDataModal isOpen={isImportModelOpen} onClose={() => setImportModelOpen(false)} onUpload={setDataUploaded} />
    </>
  )
}

export default Dashboard