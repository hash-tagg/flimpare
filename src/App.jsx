import React from 'react'
import { Routes, Route} from 'react-router-dom'

import {Actors, Movies, Profile, MovieInfo, Navbar } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/movie/:id" element={<MovieInfo/>} />
        <Route path="/actors/:id" element={<Actors/>} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      
    </div>
  )
}

export default App
