import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Contact from '../components/Molecules/contact'
import Experience from '../components/Molecules/experience'
import Navbar from '../components/Molecules/navbar'
import PrivatRoute from '../components/Molecules/privateroute'
import NotLogged from '../components/Molecules/privateroute'
import Skills from '../components/Molecules/skills'

const logg = false

const CV = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route index element={"Page d'acceuil"} />
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="" element={<PrivatRoute />}>
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default CV
