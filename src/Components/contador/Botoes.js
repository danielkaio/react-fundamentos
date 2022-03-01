import React from "react";


const Botao =(props)=>{
    const {SetInc , SetDec } = props
    return (
        <div>
             <button onClick={SetInc}>+</button>
             <button onClick={SetDec}>-</button>

        </div>
    )

}

export default Botao