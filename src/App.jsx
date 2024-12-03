import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login/Login.jsx"
import Dashboard from "./pages/dashboard/Dashboard.jsx"
import CreateRelay from "./pages/dashboard/CreateRelay.jsx"
import EditRelay from "./pages/dashboard/EditRelay.jsx"

import "./App.css"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create" element={<CreateRelay />} />
        <Route path="/dashboard/edit/:id" element={<EditRelay />} />
      </Routes>
    </>
  )
}

export default App
