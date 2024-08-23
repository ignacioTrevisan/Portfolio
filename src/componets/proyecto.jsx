import React, { useEffect, useRef, useState } from 'react'
import styles from '../css/proyectos.module.css'
import { IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos, GitHub, Launch } from '@mui/icons-material';

export const Proyecto = ({ titulo, descripcion, imagenes, iconos = [], repo, url }) => {
    const [paginacion, setPaginacion] = useState(0);

    const [icon, setIcon] = useState([])
    useEffect(() => {
        const resultado = iconos.map(item => item.split('|'));
        setIcon(resultado);
    }, [])
    const [width, setWidth] = useState(window.innerWidth);

    const izquierdaRef = useRef(null);
    const izquierdaAdentroRef = useRef(null);

    useEffect(() => {
        if (izquierdaRef.current) {
            setWidth(izquierdaRef.current.clientWidth);
            console.log(izquierdaRef.current.clientWidth)
        }
    }, [])
    console.log(url)


    const scrollDerecha = () => {


        izquierdaRef.current.scrollBy({
            left: izquierdaRef.current.clientWidth,
            behavior: 'smooth'
        });
        setWidth(izquierdaRef.current.clientWidth);
        setPaginacion(paginacion + 1);
    }

    const scrollIzquierda = () => {

        izquierdaRef.current.scrollBy({
            left: -izquierdaRef.current.clientWidth,
            behavior: 'smooth'
        });
        setWidth(izquierdaRef.current.clientWidth);
        setPaginacion(paginacion - 1);
    }



    return (
        <div className={styles.proyectoContainer}>
            <div className={styles.izquierda} ref={izquierdaRef}>

                {imagenes.map((i) => (
                    <div className={styles.izquierdaAdentro} ref={izquierdaAdentroRef} style={{ minWidth: width }}>
                        <img src={i} />
                    </div>
                ))}
            </div>
            <div className={styles.derecha}>
                <div className={styles.texto}>
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                    <div style={{ position: 'absoute', bottom: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
                        {
                            repo &&
                            <IconButton
                                component="a"
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: 'black' }}
                            >
                                <GitHub sx={{ fontSize: 20 }} />
                            </IconButton>
                        }

                        {
                            url &&
                            <IconButton
                                component="a"
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: 'black' }}
                            >
                                <Launch sx={{ fontSize: 20 }} />
                            </IconButton>
                        }
                    </div>

                </div>
                <div className={styles.tecnologias}>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', overflowX: 'auto', alignItems: 'center', gap: '5%', color: '#333333' }} >
                        {icon.length > 0 && icon.map((i) =>

                            < div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <img src={i[1]} width='20px' alt="" />
                                <p>{i[0]}</p>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </div >
    )

}
