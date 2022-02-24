import * as React from "react";
import Pergunta from "./Pergunta";
import Chaves from "./Chaves";

class ZonaPergunta extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    renderZona = () => {
        if (this.props.mostrarPergunta && !this.props.mostrarChaves){
            return (
                <Pergunta
                    id={this.props.id}
                    texto={this.props.texto}
                    opcao1={this.props.opcao1}
                    opcao2={this.props.opcao2}
                    opcao3={this.props.opcao3}
                    opcao4={this.props.opcao4}
                    imagem={this.props.imagem}
                    onAnswer={this.props.onAnswer}
                />
            );
        }else if (!this.props.mostrarPergunta && this.props.mostrarChaves) {
            return (
                <Chaves
                    chavesUser={this.props.chavesUser}
                    escolherChave={this.props.escolherChave}
                />
            );
        } else {
            return (
                <div/>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderZona()}
            </div>
        );
    }
}

export default ZonaPergunta;