import * as React from "react";
import chaveAzul from "../img/chave-azul.jpg";
import chaveVerde from "../img/chave-verde.jpg";
import chaveVermelha from "../img/chave-vermelha.jpg";
import cordas from "../img/cordas.jpg";
import mascara from "../img/mascara.jpg";
import protetorSolar from "../img/protetorSolar.jpg";
import recordacoesVarias from "../img/recordacoesVarias.jpg";
import agua from "../img/agua.jpg";
import cozido from "../img/cozido.jpg";


class Loja extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    buyChaveAzul = () => {
        this.props.updateInventarioChaveAzul(1)
    }

    buyChaveVermelha = () => {
        this.props.updateInventarioChaveVermelha(1)
    }

    buyChaveVerde = () => {
        this.props.updateInventarioChaveVerde(1)
    }


    buyCorda = () => {
        this.props.updateInventarioCorda(1)
    }

    buyMascara = () => {
        this.props.updateInventarioMascara(1)
    }

    buyProtetorSolar = () => {
        this.props.updateInventarioProtetorSolar(1)
    }

    buyRecordacoesVarias = () => {
        this.props.updateInventarioRecordacoesVarias(1)
    }

    buyGarrafaAgua = () => {
        this.props.updateInventarioGarrafaAgua(1)
    }

    buyCozidoFurnas = () => {
        this.props.updateInventarioCozidoFurnas()
    }

    render() {
        return (
            <div>
                <div className="loja " id="loja">
                    <div className="row">
                        <div className="col">
                            <h1 id="loja-title">Loja</h1>
                        </div>
                        <div className="col">
                            <button id="close-button" onClick={this.props.botaoFechar}>
                                <i className="far fa-times-circle"/>
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img alt="" src={chaveAzul} style={{width: "80px"}}/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Chave Azul<span className="preco">5€</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary" onClick={this.buyChaveAzul}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={chaveVermelha} style={{width: "80px"}} alt=""/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Chave Vermelha<span
                                                    className="preco">5€</span></p>
                                            </div>
                                        </div>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary"
                                           onClick={this.buyChaveVermelha}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={chaveVerde} style={{width: "80px"}} alt=""/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Chave Verde<span className="preco">5€</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary" onClick={this.buyChaveVerde}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={cordas} style={{width: "80px"}} alt=""/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Cordas<span className="preco">2€</span></p>
                                            </div>
                                        </div>

                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary" onClick={this.buyCorda}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img alt="" src={mascara} style={{width: "80px"}}/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Máscaras<span className="preco">2€</span></p>
                                            </div>

                                        </div>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary" onClick={this.buyMascara}>Comprar</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img alt="" src={protetorSolar} style={{width: "80px"}}/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Protetor Solar<span
                                                    className="preco">2€</span></p>
                                            </div>
                                        </div>

                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary"
                                           onClick={this.buyProtetorSolar}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img alt="" src={recordacoesVarias} style={{width: "80px"}}/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Recordações Várias<span
                                                    className="preco">1€</span></p>
                                            </div>
                                        </div>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary"
                                           onClick={this.buyRecordacoesVarias}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img alt="" src={agua} style={{width: "80px"}}/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Garrafa de Água<span
                                                    className="preco">1€</span></p>
                                            </div>
                                        </div>


                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary"
                                           onClick={this.buyGarrafaAgua}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={cozido} style={{width: "80px"}} alt=""/>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Cozido das Furnas<span
                                                    className="preco">3€</span></p>

                                            </div>
                                        </div>


                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="btn btn-primary"
                                           onClick={this.buyCozidoFurnas}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loja;