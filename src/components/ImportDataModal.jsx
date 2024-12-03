import React from 'react'
import { FaFileImport } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';

function ImportDataModal({ isOpen, onClose, onUpload }) {

  const BACKEND_SERVER = "http://localhost:8000/upload";

  const [dataURL, setDataURL] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const handleCloseModal = () => {
    setAcceptedFiles([]);
    setUploadMessage(null);
    setDataURL(null);
    setIsUploaded(false);
    onClose();
  }

  const onDrop = useCallback(files => {
    setAcceptedFiles(files)
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log("file reading was aborted")
      reader.onerror = () => console.log("file reading has error")
      reader.onload = () => {
        const binaryStr = reader.result
        setDataURL(binaryStr)
      }
      reader.readAsDataURL(file)
    })
  })

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop });

  const selectedFile = acceptedFiles[0];
  const uploadFile = async () => {
    if (!selectedFile) {
      console.log("No hay archivo seleccionado.");
      return;
    }

    console.log("Subiendo archivo...");
    setIsUploading(true);
    setUploadMessage(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Realizar la solicitud POST
      const response = await fetch(BACKEND_SERVER, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al subir el archivo");
      }

      const result = await response.json();
      console.log("Archivo subido con éxito:", result);
      setUploadMessage("Archivo subido correctamente");
      setIsUploaded(true);
      onUpload(true);
    } catch (error) {
      console.error("Error durante la subida:", error);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">

        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <IoMdClose />
        </button>

        <div className={dataURL ? "border-dashed border-4 border-blue-400 my-4" : isDragActive ? "border-dashed border-4 border-emerald-200 my-4" : "border-dashed border-4 border-slate-400 my-4"}>
          <div {...getRootProps()} className="flex justify-center items-center h-64">
            <FaFileImport size={64} />
            <input {...getInputProps()} />
          </div>
        </div>

        {!isUploaded && (
          <button
            onClick={uploadFile} disabled={isUploading}
            className="w-full bg-yellow-400 py-2 rounded-md text-black font-bold hover:bg-yellow-300"
          >
            {isUploading ? "Subiendo..." : "Subir archivo"}
          </button>
        )}

        {uploadMessage && (
          <p className="text-center">
            {uploadMessage}
          </p>
        )
        }
      </div>
    </div>
  )
}

export default ImportDataModal