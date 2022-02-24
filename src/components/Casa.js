import * as React from "react";
import Peca from "./Peca";

class Casa extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    renderPeca = () => {
        if (this.props.temPeca === true){
            return (
                <Peca
                    iconJogador={this.props.iconPlayer}/>
            );
        } else {
            return (
                <div/>
            );
        }
    }

    renderSpecial = () => {
        const special = [0,6,12,18,25,33,40,42,49];
        if (special.includes(this.props.value)){
            return (
                <div>
                    <div className="row" style={{position: "absolute"}}>
                        {this.renderPeca()}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="row" style={{position: "absolute"}}>
                        {this.renderPeca()}
                    </div>
                    <h4 className="table-unit-number">{this.props.value}</h4>
                </div>
            );
        }
    }

    render() {
        return this.renderSpecial();
    }
}
export default Casa;