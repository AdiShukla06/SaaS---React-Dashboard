import { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { store } from './store/store'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import NotificationsPanel from './components/layout/NotificationsPanel'
import Dashboard from './pages/Dashboard'
import OrderList from './pages/OrderList'
import { useSelector } from 'react-redux'
import OrderListTable from './components/tables/OrderListTable'
import './App.css'

const AppContent = () => {
  const { isCollapsed } = useSelector((state) => state.sidebar)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Sidebar />
        <Header onNotificationsClick={() => setNotificationsOpen(true)} />
        
        {/* Main content */}
        <main
          className={`pt-16 transition-all duration-200 ${
            isCollapsed ? 'lg:ml-16' : 'lg:ml-64'
          }`}
          style={{
            marginLeft: window.innerWidth >= 1024 ? (isCollapsed ? '4rem' : '16rem') : '0'
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<OrderListTable />} />
            <Route path="/users" element={<Navigate to="/orders" replace />} />
            <Route path="/analytics" element={<Navigate to="/" replace />} />
            <Route path="/settings" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Notifications Panel */}
        <NotificationsPanel 
          isOpen={notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
        />
      </div>
    </Router>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App
