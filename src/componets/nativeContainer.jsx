import React, { useEffect, useRef, useState } from 'react'
import styles from '../css/proyectos.module.css'
import { SwiperSlide, Swiper } from 'swiper/react';
import { IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

export const NativeContainer = ({ titulo, descripcion, iconos = [], repo, url, ReactNativaCap = [] }) => {

    const [width, setWidth] = useState(window.innerWidth);

    const izquierdaRef = useRef(null);

    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    const [animacion, setAnimacion] = useState(true);

    const [icon, setIcon] = useState([])
    useEffect(() => {
        const resultado = iconos.map(item => item.split('|'));
        setIcon(resultado);
        setTimeout(() => {
            setAnimacion(false);
        }, 100);
    }, [])

    return (
        <div className={styles.proyectoContainer}>
            <div className={styles.izquierda} ref={izquierdaRef}>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {ReactNativaCap.map((i) => (

                        <SwiperSlide>
                            <img src={i} style={{ objectFit: 'contain' }} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <div className={styles.derecha} >
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
