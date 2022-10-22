import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FaceSharpIcon from '@mui/icons-material/FaceSharp';


const Login = () => {
  return (
    <div>
        <FaceSharpIcon/>
        <form className='form'>
        <TextField id="usu" label="Usuario" variant="outlined" />
        <TextField id="pass" label="Contraseña" variant="outlined" />
            <div>
                <Link to='/registro'>Registrarse</Link>
                <br/>
                <Link to='/pass'>Olvidaste tu contraseña</Link>
            </div>
            <Button variant="contained">Contained</Button>
        </form>

    </div>
  )
}

export default Login