import React from 'react'
import styles from '../css/about.module.css'
export const About = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>


                    <h1>Sobre mi</h1>
                    <p>Me dicen Nacho, tengo 22 años y vivi la mayor parte de mi vida en Buenos Aires, aunque ahora vivo en un pueblo de Entre Rios, Villaguay.</p>
                    <p>Empece conociendo la logica de la programacion desde chico, jugando con las netbooks que daba el gobierno, gracias a estar probando con estos juegos (Rebeca, por ejemplo) me di cuenta que lo que me gustaba era la tecnologia, mas especificamente donde pueda crear cosas, me la pasaba intentando crear juegos, por ejemplo.</p>
                    <p>Cuando me mude para Entre Rios aproveche a anotarme en una escuela tecnica, la cual tenia la posibilidad de elegir la orientacion 'programación'. Esta desicion hizo que me adentre mas en el rubro y actualmente estoy graduado como tecnico superior en desarrollo de software, en el Instituto de Santo Domingo.</p>
                    <p>Y si bien tengo el titulo y ahi aprendi mucho, tambien tengo otra gran parte de conocimiento como autodidacta, y con cursos comprados, esto por curiosidad ,hobbie, otra parte por cosas que tuve que aprender para poder realizar aplicaciones a clientes como freelance.</p>

                    <br />
                    <p><b>Nota: </b>Tambien tengo conocimientos en c#, .Net y Sql Server, de hecho, con eso hice mi tesis final y aprobe con 10, pero no lo puse por que no es lo que estoy viendo actualmente. </p> <a href="https://youtu.be/IeM3IvgUFS0" target="_blank">Video de la tesis</a>
                    <br />

                </div>
            </div>
        </div>
    )
}
