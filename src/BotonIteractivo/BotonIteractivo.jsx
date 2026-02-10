import { useState } from 'react'
import { MousePointerClick, Hash } from 'lucide-react'
import './BotonIteractivo.css'

function BotonInteractivo() {
  // 1. Declarar variable de estado con useState
  const [textoBoton, setTextoBoton] = useState('Haz clic aqui')
  const [contador, setContador] = useState(0)

  const META = 10

  // 2. Funcion controladora de eventos
  const handleClick = () => {
    const nuevoContador = contador + 1
    setContador(nuevoContador)
    setTextoBoton(
      nuevoContador >= META
        ? 'Meta alcanzada'
        : `Presionado ${nuevoContador} ${nuevoContador === 1 ? 'vez' : 'veces'}`
    )
  }

  const progreso = Math.min((contador / META) * 100, 100)
  const completo = contador >= META

  // 3. Pasar funcion al onClick SIN parentesis
  return (
    <div className="boton-container">
      <div className="boton-header">
        <h2 className="boton-title">Estado e Interaccion</h2>
        <p className="boton-subtitle">Desafio 3: Componente interactivo con useState</p>
      </div>

      <div className={`boton-counter-display ${contador > 0 ? 'active' : ''}`}>
        <div className="counter-icon">
          <Hash size={20} strokeWidth={2} />
        </div>
        <div>
          <div className="counter-value">{contador}</div>
          <div className="counter-label">{contador === 1 ? 'clic registrado' : 'clics registrados'}</div>
        </div>
      </div>

      <div className="boton-action-area">
        <button
          onClick={handleClick}
          className={`boton-interactivo ${contador > 0 ? 'clicked' : ''}`}
        >
          <MousePointerClick size={20} />
          <span>{textoBoton}</span>
        </button>
      </div>

      <div className="boton-progress">
        <div className="progress-header">
          <span className="progress-label">Progreso hacia la meta</span>
          <span className="progress-count">{contador} / {META}</span>
        </div>
        <div className="progress-bar">
          <div
            className={`progress-fill ${completo ? 'complete' : ''}`}
            style={{ width: `${progreso}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default BotonInteractivo
