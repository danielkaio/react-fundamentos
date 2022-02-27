
import ComParametro from './Components/basicos/ComParametro'
import Fragmento from './Components/basicos/Fragmento'
import Primeiro from './Components/basicos/Primeiro'
import Aleatorio from './Components/basicos/Aleatorio'
import Card from './Components/layout/Card'
import Famila from './Components/basicos/Familia'
import Lista from './Components/basicos/Lista'
import Indeciso from './Components/basicos/indeciso'
import UsuarioInfo from './Components/basicos/Usuario.info'
import DiretaPai from './Components/comunicacao/DiretaPai'
import IndiretaPai from './Components/comunicacao/IndiretaPai'
import Input from './Components/formulario/Input'


import "./App.css"




const App = () => {
    return (

        <div className="App">


            <div className='Cards'>
                <Card titulo="desafio aleatorio" color="pink">
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>

                <Card titulo="com parametro">
                    <ComParametro titulo="passando parametros"></ComParametro>
                </Card>


                <Card titulo="fragmento" color="green">
                    <Fragmento></Fragmento>
                </Card>


                <Card titulo="primeiro componente" color="orange">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo=" compnente com filhos" color="navy">
                    <Famila sobrenome="dimas"></Famila>
                </Card>


                <Card titulo=" componente repetição" color="red">
                    <Lista></Lista>
                </Card>

                <Card titulo=" componente indeciso" color="gray">
                    <Indeciso numero={2}></Indeciso>
                </Card>

                <Card titulo=" componente repetição" color="red">
                    <Indeciso numero={2}></Indeciso>
                </Card>

                <Card titulo=" componente repetição" color="red">
                    <UsuarioInfo usuario={{ nome: 'Daniel' }}></UsuarioInfo>
                </Card>


                <Card titulo=" componente Direta pai" color="red">
                    <DiretaPai></DiretaPai>
                </Card>


                <Card titulo=" componente indireta pai" color="red">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo=" componente controlado" color="red">
                    <Input></Input>
                </Card>








            </div>

        </div>





    )
}

export default App