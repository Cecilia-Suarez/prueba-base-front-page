import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{backgroundColor : 'green' }}>
        <Link to='/'><p>LOGO</p></Link>
        <div>
            <button>Iniciar Sesión</button>
            <button>Crear Cuenta</button>
        </div>
    </header>
  )
}

export default Header