import './App.css'
import SistemaAutenticacion from './SistemaAutenticacion/SistemaAutenticacion.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicio Practico Unidad 1</h1>
        <p>Desafio 5: Logica Condicional</p>
      </header>
      <main>
        <SistemaAutenticacion estaLogueado={false} />
      </main>
    </div>
  )
}

export default App
