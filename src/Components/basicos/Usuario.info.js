import IF from './if'

const UsuarioInfo =(props)=>{
    
    const usuario = props.usuario || {}
  
    return (
        <div>
            <IF test={usuario.nome && usuario.nome}>
            seja bem vindo <strong>{props.usuario.nome}</strong>
            </IF>
        </div>
    )

}
export default UsuarioInfo