
import IndiretaFilho  from "./IndiretaFilho"
import React, {useState} from "react"

const IndiretaPai =(props)=>{
    const [nome,setNome] = useState('?')
    const [idade,setIdade] = useState('0')
    const [nerd,setNerd] = useState(false)


    const informaçoes =(nome,idade,nerd)=>{
      
        setIdade(idade)
        setNerd(nerd)
        setNome(nome)
 
        

    }
    return (
        <div>
            
        <div>
            <span>{nome}</span>
            <span>{idade}</span>
            <span>{nerd ?  'verdadeiro': 'falso'}</span>
        </div>
            
            <IndiretaFilho clicar={informaçoes}></IndiretaFilho>
        </div>
    )

}

export default IndiretaPai