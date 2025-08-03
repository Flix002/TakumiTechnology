import './App.css'
// import Loader from './Components/LoadingComponent'
import LoginForm from './Components/LoginForm'
// import { Page } from './Components/Page'

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
          <Route path='/' element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
