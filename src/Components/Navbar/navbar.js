import React from "react"
import './navbar.css'
import logo from '../../Assets/Logo Panipasta.jpeg'
import AppBar from '@mui/material/AppBar'
import CardWidget from "../CardWidget/cardWidget.js"
export default function NavBar(){
    
    return(
        <AppBar position="static">
            <nav>
                <div className="container">
                   <img src={logo} alt ="Logo Panipasta" />  
                </div>
                <div>    
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Productos</a></li>
                    <li><a>Contactanos</a></li>
                    <li><a>Sobre Panipasta</a></li>
                </ul>
                </div>
                <CardWidget/>

            </nav>
        </AppBar>
        

    )

}  