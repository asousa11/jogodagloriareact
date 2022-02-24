import * as React from "react";
import Section from "./Section";

class Menu extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    renderSection = (estilo, acao) => {
        return(
            <Section
                estilo={estilo}
                acao={acao}/>
        )
    }

    render() {
        return (
            <div>
                {this.renderSection("jogar-button", this.props.acao1)}
                {this.renderSection("loja-button", this.props.acao2)}
                {this.renderSection("musica-button")}
            </div>
        );
    }
}

export default Menu;