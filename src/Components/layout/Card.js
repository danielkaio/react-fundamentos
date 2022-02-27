
import "./Card.css"

const Card = (props)=>{

    const {titulo} = props

    const estilo ={
        backgroundColor:props.color || 'gray',
        borderColor:props.color || 'white'

    }
   
    return (
        <div className="Card" style={estilo}>

        <div className="Title">{titulo}</div>

        <div className="Content">
            {props.children}
            
        </div>

        </div>
    )
}

export default Card