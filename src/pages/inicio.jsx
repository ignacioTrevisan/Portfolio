import styles from '../css/sobreMi.module.css'
import imagen from '../assets/imagen.jpg'

export const Inicio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={imagen} />
            </div>
            <div className={styles.textoContainer}>
                <h1> <span style={{ color: '#1E90FF' }}>¡Hola!</span> Me llamo Ignacio Trevisan</h1>
                <p> Tengo 22 años y vivo en Entre Ríos, Argentina. Este es mi portafolio personal, donde podrás encontrar información sobre mis estudios, proyectos, más detalles sobre mí y mis medios de contacto. Espero te sea utíl</p>
            </div>
        </div>
    )
}
