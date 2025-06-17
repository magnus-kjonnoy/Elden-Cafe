import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Café from './pages/Café'

import Status404 from './pages/404'

export default function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        {/* <Route path='' element={<Home/>}/> */}
        <Route path='' element={<Café/>}/>



        <Route path='*' element={<Status404/>}/>
      </Routes>
    </Router>
  )
}