import './App.css'
import { Page } from './Components/Page'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
