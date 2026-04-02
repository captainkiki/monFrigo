import { useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  const isFridge = location.pathname === '/fridge'

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          mon<span>Frigo</span>
        </div>
        <div className="avatar">KI</div>
      </div>

      {isFridge && (
        <div className="fridge-tabs" id="fridge-tabs">
          <button className="tab active">실온</button>
          <button className="tab">냉장</button>
          <button className="tab">냉동</button>
        </div>
      )}
    </header>
  )
}

export default Header