import './Input.css'
import React, { useState } from "react"

const Input = (props) => {

    const QuandoMudar = (e) => {

        SetValor(e.target.value)

    }
    const [valor, SetValor] = useState('inicial')
    return (
        <div className="Input">


            <h2>{valor}</h2> 
            <div style={{
                display: 'flex',
                flexDirection:'column'
                

            }}>



            <input value={valor}onChange={QuandoMudar}></input>
            <input value={valor} readOnly  />
            <input value={undefined}  />
           
        </div>

        </div>

    )
}

export default Input