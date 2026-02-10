import { LogIn } from 'lucide-react'
import './AuthButton.css'

function LoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="auth-button auth-button-login"
      aria-label="Iniciar sesion"
    >
      <LogIn size={20} />
      <span>Iniciar Sesion</span>
    </button>
  )
}

export default LoginButton
