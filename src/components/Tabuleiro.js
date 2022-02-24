import * as React from "react";
import Casa from "./Casa";

class Tabuleiro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {max: 50}
    }

    renderCasa(i) {
        if (i === this.props.novaPosicao){
            return(
                <Casa
                    temPeca={true}
                    iconPlayer={this.props.iconJogador}
                    value={i}
                />
            );
        }else {
            return(
                <Casa
                    temPeca={false}
                    iconPlayer={undefined}
                    value={i}
                />

            );
        }
    }

    render() {
        return (
            <div className="tabuleiro text-white">
                <div className="row">
                    <div className="col text-center">
                        <div id="casa0" className="table-unit col">
                            {this.renderCasa(0)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(1)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(2)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(3)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(4)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(5)}
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="table-unit col">
                            {this.renderCasa(11)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(10)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(9)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(8)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(7)}
                        </div>
                        <div id="casa6" className="table-unit col">
                            {this.renderCasa(6)}
                        </div>

                    </div>
                    <div className="col text-center">
                        <div id="casa12" className="table-unit col">
                            {this.renderCasa(12)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(13)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(14)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(15)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(16)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(17)}
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="table-unit col">
                            {this.renderCasa(23)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(22)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(21)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(20)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(19)}
                        </div>
                        <div id="casa18" className="table-unit col">
                            {this.renderCasa(18)}
                        </div>

                    </div>
                    <div className="col text-center">
                        <div className="table-unit col">
                            {this.renderCasa(24)}
                        </div>
                        <div id="casa25" className="table-unit col">
                            {this.renderCasa(25)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(26)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(27)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(28)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(29)}
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="table-unit col">
                            {this.renderCasa(35)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(34)}
                        </div>
                        <div id="casa33" className="table-unit col">
                            {this.renderCasa(33)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(32)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(31)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(30)}
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="table-unit col">
                            {this.renderCasa(36)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(37)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(38)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(39)}
                        </div>
                        <div id="casa40" className="table-unit col">
                            {this.renderCasa(40)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(41)}
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="table-unit col">
                            {this.renderCasa(47)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(46)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(45)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(44)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(43)}
                        </div>
                        <div id="casa42" className="table-unit col">
                            {this.renderCasa(42)}
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="table-unit col">
                            {this.renderCasa(48)}
                        </div>
                        <div id="casa49" className="table-unit col">
                            {this.renderCasa(49)}
                        </div>
                        <div className="table-unit col">
                            {this.renderCasa(50)}
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Tabuleiro;