import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';
import { IconButton } from '@mui/material';

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.navbarContainer}>
                <IconButton
                    component="a"
                    href="#Inicio"
                    rel="noopener noreferrer"
                    sx={{ color: 'black', fontSize: '16px' }}
                >

                    <FaHome className={activeSection === 'Inicio' ? styles.selected : ''} />
                </IconButton>
                <IconButton
                    component="a"
                    href="#Proyectos"
                    rel="noopener noreferrer"
                    sx={{ color: 'black', fontSize: '16px' }}
                >
                    <FaProjectDiagram className={activeSection === 'Proyectos' ? styles.selected : ''} />

                </IconButton>

                <IconButton
                    component="a"
                    href="#SobreMi"
                    rel="noopener noreferrer"
                    sx={{ color: 'black', fontSize: '16px' }}
                >
                    <FaUser className={activeSection === 'SobreMi' ? styles.selected : ''} />

                </IconButton>

                <IconButton
                    component="a"
                    href="#contacto"
                    rel="noopener noreferrer"
                    sx={{ color: 'black', fontSize: '16px' }}
                >
                    <FaEnvelope className={activeSection === 'contacto' ? styles.selected : ''} />

                </IconButton>


            </div>
        </div>
    );
};
