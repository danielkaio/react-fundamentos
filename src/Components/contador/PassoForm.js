import React from "react";

const PassoForm =(props)=>{
 const {setpasso,passo} = props
    return (
        <div>
              <label htmlFor="passoinput">Passo:</label>
                <input
                    type="number"
                    id="passoinput"
                    value={setpasso}
                    onChange={passo}
                ></input>
        </div>
    )
}

export default PassoForm