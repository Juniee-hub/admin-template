import { Routes, Route } from 'react-router-dom'
import AdminMain         from './pages/main'
import AdminLogin        from './pages/login'
import AdminNotFound     from './pages/notfound'

function AdminRoute () {
    return (
        <Routes>
            <Route path="/" element={<AdminMain/>}/>
            <Route path="login" element={<AdminLogin/>}/>

            <Route path="*" element={<AdminNotFound/>}/>
        </Routes>
    )
}

export default AdminRoute
