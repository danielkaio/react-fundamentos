
import React from "react"

const ComParametro = (props)=>{
    const {titulo,texto} = props
    
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{texto}</p>
            
        </div>
    )
}

export default ComParametro