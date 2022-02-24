import * as React from "react";
import Loja from "./Loja";
import Tabuleiro from "./Tabuleiro";

class ZonaCentro extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    renderZonaCentro = () => {
        let render;
        if (this.props.openLoja){
            render =
                <Loja
                    updateInventarioChaveAzul={this.props.updateInventarioChaveAzul}
                    updateInventarioChaveVermelha={this.props.updateInventarioChaveVermelha}
                    updateInventarioChaveVerde={this.props.updateInventarioChaveVerde}
                    updateInventarioCorda={this.props.updateInventarioCorda}
                    updateInventarioMascara={this.props.updateInventarioMascara}
                    updateInventarioProtetorSolar={this.props.updateInventarioProtetorSolar}
                    updateInventarioRecordacoesVarias={this.props.updateInventarioRecordacoesVarias}
                    updateInventarioGarrafaAgua={this.props.updateInventarioGarrafaAgua}
                    updateInventarioCozidoFurnas={this.props.updateInventarioCozidoFurnas}
                    botaoFechar={this.props.botaoFechar}
                />
        }else {
            render =
                <Tabuleiro
                    iconJogador={this.props.iconJogador}
                    novaPosicao={this.props.posicaoJogador}
                    cofre1={this.props.cofre1}
                    cofre2={this.props.cofre2}
                    cofre3={this.props.cofre3}
                />
        }
        return render;
    }

    render() {
        return (
            <div>
                {this.renderZonaCentro()}
            </div>
        );
    }
}

export default ZonaCentro;