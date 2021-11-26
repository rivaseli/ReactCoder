import React from "react"
import './navbar.css'
//import logo from '..public/assets/Logo Panipasta.jpeg'
import AppBar from '@mui/material/AppBar'

export default function NavBar(){
    
    return(
        <AppBar>
            <nav>
                <div className="container">
                                 
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Sobre Panipasta</a>
                    </li>
                    <li>
                        <a>Contactanos</a>
                    </li>
                </ul>
                </div>
            </nav>
        </AppBar>
        

    )

}  