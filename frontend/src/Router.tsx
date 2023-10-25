
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from './pages/Auth'
import { Home } from './pages/Home'
import { AdminAuth } from './pages/AdminAuth'
import { AdminDashBoard } from './pages/AdminDashBoard'
import { useAppSelector } from './app/hooks'

export const Router = () => {
  const { admin } = useAppSelector(state => state.admin)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {
            admin && (admin.type==='admin') ?
              <Route path="/admin" element={<AdminDashBoard />} /> :
              <Route path="/admin" element={<AdminAuth />} />
          }
        </Routes>


      </BrowserRouter>
    </div>
  )
}
