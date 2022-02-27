
const Aleatorio = (props)=>{
 
    const {min,max} = props

    const aleatorio = parseInt(Math.random()*(max-min)) + min
    return (
        <div>
           <h2>valor aleatorio</h2>
           <p><strong>valor minimo</strong>{min}</p>
           <p><strong>valor maximo</strong>{max}</p>
           <p><strong>valor aleatorio</strong>{aleatorio}</p>
        </div>
    )
}

export default Aleatorio