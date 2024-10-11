import styles from '../css/sobreMi.module.css'
import imagen from '../assets/imagen.jpg'

export const Inicio = () => {
    const screenWidth = window.innerWidth;
    return (
        <div className={styles.container} >
            <div className={styles.imageContainer} style={{ minWidth: screenWidth < 600 ? '100%' : '200px', maxWidth: screenWidth < 600 ? '100%' : '200px' }}>
                <img src={imagen} />
            </div>
            <div style={{ maxWidth: screenWidth > 600 ? '60%' : '100%' }}>
                <h1> <span style={{ color: '#1E90FF' }}>¡Hola!</span> Me llamo Ignacio Trevisan</h1>
                <p> Tengo 22 años y vivo en Entre Ríos, Argentina. Este es mi porfolio personal, donde podrás encontrar información sobre mis estudios, proyectos, más detalles sobre mí y mis medios de contacto. Espero te sea utíl
                    <p>También dejo adjunto mi <a href='../../public/CvProg.pdf' download='CvProg.pdf'> Curriculum vitae </a> por si por alguna razón, llegaste a este punto sin que te lo haya pasado de ante mano. </p>

                </p>
            </div>
        </div>
    )
}
