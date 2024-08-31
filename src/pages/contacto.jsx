import { Button, Grid, Paper, styled, TextField } from '@mui/material';
import style from '../css/contacto.module.css'
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import { UseForm } from '../hooks/useForm';
import { collection, doc, setDoc } from 'firebase/firestore';
import { FireBaseDB } from '../firebase/config';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';


const formData = {
    sugerencia: ''
}

export const Contacto = () => {
    const { sugerencia, OnInputchange } = UseForm(formData);
    const submit = async () => {
        if (sugerencia.length < 1) return;
        event.preventDefault();
        const body = {
            mensaje: sugerencia
        }
        const newDoc = doc(collection(FireBaseDB, `sugerencias/`))
        await setDoc(newDoc, body);
        toast.success(' Muchisimas gracias', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
        });
    }

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />

            <br></br>
            <form onSubmit={submit}>
                <Grid container mb={'10'} >


                    <Grid item xs={11}>
                        <h1>Sugerencias...</h1>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Sugerencias sobre el porfolio (Se envia a Firebase, no es necesario autenticación)"
                            multiline
                            rows={2}
                            fullWidth
                            name='sugerencia'
                            value={sugerencia}
                            onChange={OnInputchange}
                        />
                    </Grid>
                    <Grid container xs={11} justifyContent='flex-end' pt={'20px'}>
                        <Button variant="contained" type='submit'>Enviar</Button>
                    </Grid>

                </Grid>
            </form>

            <div className={style.container}>


                <h1>¿Tienes algún proyecto en mente?</h1>
                <p>¡Contactame y trabajemos juntos!</p>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '5%' }}>


                    <a href="https://github.com/ignacioTrevisan" className={style.icon_link}><div ><FaGithub /></div></a>

                    <a href="mailto:nachotizii988@gmail.com" className={style.icon_link}><FaEnvelope /></a>

                    <a href="https://www.linkedin.com/in/ignacio-trevisan-799992240/" className={style.icon_link}><FaLinkedin /></a>

                    <a href="https://www.instagram.com/nacho.trevisan/" className={style.icon_link}>
                        <FaInstagram />
                    </a>


                </div>
                <br></br>


            </div >
        </>
    );
}



