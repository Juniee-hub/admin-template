import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import NotFound                         from './pages/notfound'
import Main                             from './pages/main'
import AdminRoute                       from './admin/route'

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/webmaster/*" element={<AdminRoute/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
