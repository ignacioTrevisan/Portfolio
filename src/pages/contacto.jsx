import style from '../css/contacto.module.css'
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

export const Contacto = () => {
    return (
        <div className={style.container}>


            <h1>¿Tienes algún proyecto en mente?</h1>
            <p>Contactame y trabajemos juntos!</p>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '5%', marginTop: '2%' }}>


                <a href="https://github.com/ignacioTrevisan" className={style.icon_link}><div ><FaGithub /></div></a>

                <a href="mailto:nachotizii988@gmail.com" className={style.icon_link}><FaEnvelope /></a>

                <a href="https://www.linkedin.com/in/ignacio-trevisan-799992240/" className={style.icon_link}><FaLinkedin /></a>

                <a href="https://www.instagram.com/nacho.trevisan/" className={style.icon_link}>
                    <FaInstagram />
                </a>

            </div>


        </div >
    );
}



