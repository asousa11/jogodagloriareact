import * as React from "react";

class Inventario extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div className="inventario col">
                    <div className="row">
                        <div className="col">
                            <table className="inventario-list">
                                <tbody>
                                <tr>
                                    <td className="inventario-unit-name">Chave Azul</td>
                                    <td className="inventario-unit-value">{this.props.inventario.chaveAzul}</td>
                                </tr>
                                <tr>
                                    <td className="inventario-unit-name">Chave Vermelha</td>
                                    <td className="inventario-unit-value">{this.props.inventario.chaveVermelha}</td>
                                </tr>
                                <tr>
                                    <td className="inventario-unit-name">Chave Verde</td>
                                    <td className="inventario-unit-value">{this.props.inventario.chaveVerde}</td>
                                </tr>
                                <tr>
                                    <td className="inventario-unit-name">Cordas</td>
                                    <td className="inventario-unit-value">{this.props.inventario.corda}</td>
                                </tr>
                                <tr>
                                    <td className="inventario-unit-name">Máscaras</td>
                                    <td className="inventario-unit-value">{this.props.inventario.mascara}</td>
                                </tr>
                                <tr>
                                    <td className="inventario-unit-name">Protetor Solar</td>
                                    <td className="inventario-unit-value">{this.props.inventario.protetor}</td>
                                </tr>
                                <tr>
                                    <td className="inventario-unit-name">Recordações Várias</td>
                                    <td className="inventario-unit-value">{this.props.inventario.recordacoes}</td>
                                </tr>
                                <tr>
                                    <td className="inventario-unit-name">Garrafas de Água</td>
                                    <td className="inventario-unit-value">{this.props.inventario.agua}</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inventario;