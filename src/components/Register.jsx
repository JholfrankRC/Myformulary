import { Button, TextField } from '@mui/material'

const Register = () => {

  return (

        <div>
            <form className='Registrar'>
                <TextField id="name" label="Nombre" variant="outlined" />
                <br />
                <TextField id="email" label="Correo electronico" variant="outlined" />
                <br />
                <TextField id="dire" label="Dirección" variant="outlined" />
                <br />
                <TextField id="tlfon" label="Telefono" variant="outlined" />
                <br />
                <Button variant="contained">Enviar</Button>
            </form>
        </div>
  )
}

export default Register