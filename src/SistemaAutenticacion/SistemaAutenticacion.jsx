import { useState } from 'react'
import { CheckCircle2, XCircle, User, Info } from 'lucide-react'
import LoginButton from './LoginButton.jsx'
import LogoutButton from './LogoutButton.jsx'
import './SistemaAutenticacion.css'

function SistemaAutenticacion({ estaLogueado: propEstaLogueado = false }) {
  const [estaLogueado, setEstaLogueado] = useState(propEstaLogueado)

  const handleLogin = () => {
    setEstaLogueado(true)
  }

  const handleLogout = () => {
    setEstaLogueado(false)
  }

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2 className="auth-title">Sistema de Autenticacion</h2>
        <p className="auth-subtitle">Desafio 5: Logica condicional con operador ternario</p>
      </div>

      {/* Estado de autenticacion - operador ternario */}
      <div className={`auth-status ${estaLogueado ? 'authenticated' : 'unauthenticated'}`}>
        <div className="status-icon">
          {estaLogueado ? (
            <CheckCircle2 size={24} strokeWidth={2} />
          ) : (
            <XCircle size={24} strokeWidth={2} />
          )}
        </div>
        <div className="status-text">
          {estaLogueado ? 'Sesion activa' : 'Sin autenticar'}
        </div>
      </div>

      {/* Contenido condicional segun estado */}
      {estaLogueado ? (
        <div className="auth-profile">
          <div className="profile-avatar">
            <User size={24} />
          </div>
          <div className="profile-info">
            <p className="profile-name">Usuario Autenticado</p>
            <p className="profile-role">Sesion iniciada correctamente</p>
          </div>
        </div>
      ) : (
        <div className="auth-form">
          <div className="auth-form-field">
            <label className="auth-form-label">Correo electronico</label>
            <input
              type="email"
              className="auth-form-input"
              placeholder="usuario@ejemplo.com"
              readOnly
            />
          </div>
          <div className="auth-form-field">
            <label className="auth-form-label">Contrasena</label>
            <input
              type="password"
              className="auth-form-input"
              placeholder="********"
              readOnly
            />
          </div>
        </div>
      )}

      <div className="auth-divider">
        <div className="auth-divider-line" />
        <span className="auth-divider-text">accion</span>
        <div className="auth-divider-line" />
      </div>

      {/* Renderizado condicional de botones con ternario */}
      <div className="auth-actions">
        {estaLogueado ? (
          <LogoutButton onClick={handleLogout} />
        ) : (
          <LoginButton onClick={handleLogin} />
        )}
      </div>

      <div className="auth-logic-info">
        <div className="logic-info-icon">
          <Info size={16} />
        </div>
        <div className="logic-info-text">
          Este componente usa el operador ternario{' '}
          <code className="logic-info-code">estaLogueado ? A : B</code>{' '}
          para decidir que componente renderizar segun la prop booleana.
        </div>
      </div>
    </div>
  )
}

export default SistemaAutenticacion
