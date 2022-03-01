import React, { Component } from "react"
import Display from "./Display";
import Botao from "./Botoes";
import PassoForm from "./PassoForm";


class Contador extends Component {


    state = {
        numero: this.props.valorinicial || 0,
        passo: this.props.valorinicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,

        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,

        })
    }


    setpasso = (e) => {
        this.setState({
         passo: +e.target.value
        })

    }
    render() {
        return (
            <div>

                <h2>contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo}></PassoForm>
                <Botao SetInc={this.inc} SetDec={this.dec}></Botao>

            </div>
        )
    }
}

export default Contador