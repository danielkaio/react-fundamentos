import FamiliaMembro from '../basicos/FamiliaMembro'

const Famila = (props)=>{
 
    return (
        
        <div>
        <FamiliaMembro nome ="daniel" sobrenome={props.sobrenome}></FamiliaMembro>
        <FamiliaMembro nome ="kaio" {...props}></FamiliaMembro>
        <FamiliaMembro nome ="joana" sobrenome="silva"></FamiliaMembro>
        </div>
    )
}

export default Famila