import * as React from "react";

class InfoTurn extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="infoTurn">
                    <p className="player-text">É a tua vez!</p>
                    <div className="info row">
                        <div className="col-md-6">
                            <i className="iconTurn fas fa-chess-king"/>
                        </div>
                        <div className="col-md-6 ">
                            <p className="player-text row text-left">
                                {this.props.nome}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoTurn;