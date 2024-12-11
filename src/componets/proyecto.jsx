import React, { useEffect, useRef, useState } from 'react'
import styles from '../css/proyectos.module.css'
import { IconButton } from '@mui/material';
import { Download, DownloadDone, GitHub, Launch } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Proyecto = ({ titulo, download, descripcion, onlyNative, imagenes, iconos = [], repo, url, ReactNativaCap = [], isNative = false, ReactNaviteDesc = '', rnIcons = [] }) => {
    const [isNaviteSelected, setIsNaviteSelected] = useState(false);
    const [icon, setIcon] = useState([])
    const screenWidth = window.innerWidth;
    const [width, setWidth] = useState({
        izquierda: 40,
        derecha: 60,
    });
    useEffect(() => {
        const resultado = iconos.map(item => item.split('|'));
        setIcon(resultado);
        if (rnIcons.length > 0 && isNaviteSelected) {
            const resultado = rnIcons.map(item => item.split('|'));
            setIcon(resultado);
        }
        if (isNaviteSelected || onlyNative) {
            if (screenWidth > 900) {
                setWidth({ izquierda: 20, derecha: 80 });
            } else {
                setWidth({ izquierda: 100, derecha: 100 });
            }
        } else {
            if (screenWidth > 900) {

                setWidth({ izquierda: 40, derecha: 60 });
            } else {
                setWidth({ izquierda: 100, derecha: 100 });

            }
        }
    }, [isNaviteSelected])

    const izquierdaRef = useRef(null);



    return (
        <div className={styles.animacion}>
            {isNative ?
                <div style={{ width: '100%', height: '50px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '40%', height: '50px', borderTopLeftRadius: 50, overflow: 'hidden', borderTopRightRadius: 50, flexDirection: 'row', display: 'flex' }}>
                        <div style={{ width: '50%', height: '50px', backgroundColor: isNaviteSelected ? 'grey' : '#1E90FF', color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => setIsNaviteSelected(false)}>
                            React
                        </div>
                        <div style={{ width: '50%', backgroundColor: isNaviteSelected ? '#1E90FF' : 'grey', color: 'white', height: '50px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => setIsNaviteSelected(true)}>
                            React Native
                        </div>
                    </div>
                </div>
                :
                <div style={{ height: '30px' }}></div>
            }


            <div className={styles.proyectoContainer}>
                <div className={styles.izquierda} style={{ width: `${width.izquierda}%` }} ref={izquierdaRef}>

                    {isNaviteSelected ? (
                        <SwiperComponent images={ReactNativaCap} isNative={true} />
                    ) : (
                        <SwiperComponent images={imagenes} isNative={onlyNative ? true : false} />
                    )}



                </div>

                <div className={styles.derecha} style={{ width: `${width.derecha}%` }} >
                    <div className={styles.texto}>
                        <h1>{titulo}</h1>
                        <p>{isNaviteSelected ? ReactNaviteDesc : descripcion}</p>
                        <div style={{ position: 'absoute', bottom: 0, width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
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
                            {
                                download &&
                                <IconButton
                                    component="a"
                                    href={download}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: 'black' }}
                                >
                                    <Download sx={{ fontSize: 20 }} />
                                </IconButton>
                            }
                        </div>

                    </div>
                    {/* <div className={styles.fondoTecnologia}> */}


                    <div className={styles.tecnologias}>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'start',
                                overflowX: 'auto',
                                alignItems: 'center',
                                gap: '5%',
                                color: '#333333',

                            }}>

                            {icon.length > 0 && icon.map((i, index) =>
                                <div key={i[0] + index} style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'start', overflowx: 'scroll', width: '400px' }}>
                                    <img src={i[1]} width='20px' alt={i[0]} />
                                    <p style={{ fontSize: '14px' }}>{i[0]}</p>
                                </div>
                            )
                            }

                        </div>
                    </div>
                    {/* </div> */}

                </div>
            </div >

        </div >
    )

}


const SwiperComponent = ({ images, isNative }) => (
    <Swiper spaceBetween={50} slidesPerView={1}>
        {images.map((img, index) => (
            <SwiperSlide key={index}>

                <img src={img} alt="Imagen" style={{ objectFit: 'contain' }} width={1080} height={720} quality={100} />
            </SwiperSlide>
        ))}
    </Swiper>
);
