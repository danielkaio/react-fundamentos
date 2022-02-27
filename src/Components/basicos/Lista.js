
import alunos from '../../data/alunos'
const lista = (props)=>{
  
    const alunosJSX = alunos.map((aluno)=>{
        return(
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome}  {aluno.nota}
            </li>
        )
    })

    return (
        <ul>
            <li style={{listStyle:"none"}} >{alunosJSX}</li>
        </ul>
    )
  
    
    
}

export default lista