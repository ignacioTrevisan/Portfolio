import React, { useEffect, useState } from 'react'
import styles from '../css/proyectos.module.css'
import { Proyecto } from '../componets/proyecto'
import { FireBaseDB } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export const Proyectos = () => {
    const [proyecto, setProyecto] = useState([])
    const getProyectos = async () => {
        const collectionRef = collection(FireBaseDB, 'proyectosPortfolio');
        const docs = await getDocs(collectionRef);
        const proyectos = [];

        docs.forEach(doc => {
            proyectos.push({ ...doc.data(), id: doc.id });
        })
        const orderArray = [proyectos[1], proyectos[0], proyectos[2], proyectos[3]];

        setProyecto(orderArray)
    }
    useEffect(() => {
        getProyectos();
    }, [])

    console.log(proyecto);



    return (
        <div className={styles.container}>
            {proyecto.length > 0 && proyecto.map((p) =>
                <Proyecto
                    titulo={p.Titulo}
                    imagenes={p.Imagenes}
                    descripcion={p.Descripcion}
                    iconos={p.iconos}
                    repo={p.repo}
                    url={p.url}
                    isNative={p.isNative}
                    onlyNative={p.onlyNative}
                    ReactNativaCap={p.ReactNativaCap ?? []}
                    ReactNaviteDesc={p.DescripcionRn ?? ''}
                    rnIcons={p.rnIcons ?? []}
                    download={p.download && p.download}
                />
            )}

        </div>
    )
}
