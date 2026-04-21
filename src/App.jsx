import { Encabezado } from './components/Encabezado/Encabezado'
import { CuerpoPosteo } from './components/CuerpoPosteo'
import { Navegador } from './components/Navegador/Navegador'
import { PieDePosteo } from './components/Footer/PieDePosteo'
import { Asistente } from './components/Asistente'

function App() {

  const asistentes = [ { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: ':)' },{ nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: ':D' },{ nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: ';)' }];

  return (
  <>
    <Encabezado/>
    <CuerpoPosteo/>
    <Asistente>
      {asistentes.map(({ nombre, tarea, emoji }, index) => (
        <li key={index}>
          <h4>{nombre}</h4> <p>{tarea} {emoji} </p>
        </li>
      ))}
    </Asistente>
    <PieDePosteo/>
  </> );
}

export default App;
