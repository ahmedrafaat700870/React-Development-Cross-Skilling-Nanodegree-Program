import React  from 'react'
import ListBocks from './components/ListBocks'
import Search from './components/Search'
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' exact element={<ListBocks/>}/>
          <Route path='/search' element={<Search/>} />
          <Route  path='/home' element={ <Navigate  to={'/'} /> }/> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
