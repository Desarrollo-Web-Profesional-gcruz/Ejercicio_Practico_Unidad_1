import './App.css'
import BotonInteractivo from './BotonIteractivo/BotonIteractivo.jsx'
import SistemaAutenticacion from './SistemaAutenticacion/SistemaAutenticacion.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicio Practico Unidad 1</h1>
        <p>Desafio 3: Estado e Interaccion | Desafio 5: Logica Condicional</p>
      </header>
      <main>
        <BotonInteractivo />
        <SistemaAutenticacion estaLogueado={false} />
      </main>
    </div>
  )
}

export default App