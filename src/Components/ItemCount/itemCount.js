import React,{ useState } from "react"
import Button from '@mui/material/Button';


export default function ItemCount(){

    const [itemCount, setItemCount] = useState (0)

    const stock = 10
    
    const updateItem = () => {
        if(itemCount < stock){
            setItemCount (itemCount + 1)
        }
    }

    const removeItem = () => {
        if(itemCount >= 1){
            setItemCount (itemCount - 1)
        }
    }

    return (
        
        <div>  
            <h2> Sorrentinos</h2>
            <h1>{itemCount}</h1>
            <h3> Productos en STOCK={stock} </h3>
            <Button variant="outlined" color="error"onClick={updateItem}>+</Button>
            <Button variant="outlined" color="error"onClick={removeItem}>-</Button>
        
        </div>
        
    )
    
}