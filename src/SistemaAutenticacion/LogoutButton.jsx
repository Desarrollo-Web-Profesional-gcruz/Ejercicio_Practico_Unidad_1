import { LogOut } from 'lucide-react'
import './AuthButton.css'

function LogoutButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="auth-button auth-button-logout"
      aria-label="Cerrar sesion"
    >
      <LogOut size={20} />
      <span>Cerrar Sesion</span>
    </button>
  )
}

export default LogoutButton
