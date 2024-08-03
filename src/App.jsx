
import './App.css'
import { Navbar } from './componets/navbar'
import { Inicio, About, Proyectos } from './pages'
import { Contacto } from './pages/contacto';

function App() {


  return (
    <>
      <Navbar />
      <div className="content-container">
        <section id='Inicio'>
          <Inicio />
        </section >
        <section id='Proyectos' >
          <Proyectos />
        </section >
        <section id='SobreMi' >
          <About />
        </section >
        <section id='contacto' >
          <Contacto />
        </section >
      </div>
    </>
  );
}

export default App
