import React from 'react'
import { TextField, Button } from '@mui/material'

const Pass = () => {
  return (

    <div>
            <form className='correo'>
                <TextField id="email" label="Correo electronico" variant="outlined" />
                <br />
                <Button variant="contained">Enviar</Button>
            </form>
        </div>

  )
}

export default Pass