import { useNavigate, useLocation } from 'react-router-dom'
import './BottomNav.css'

const navItems = [
  { path: '/fridge', icon: '🧊', label: '냉장고' },
  { path: '/recipe', icon: '🍳', label: '레시피' },
  { path: '/log',    icon: '📊', label: '기록' },
]

function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <div
          key={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <div className="nav-icon">{item.icon}</div>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  )
}

export default BottomNav