import * as React from "react";
import InfoSection from "./InfoSection";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconVidas: "fa fa-heart",
            iconMoedas: "fa fa-euro",
            iconMapa: "fas fa-map"
        }
    }

    renderInfoSection = (icon, texto) => {
        return (
            <InfoSection
                icon={icon}
                texto={texto}
            />
        );
    }

    render() {
        return (
                <div className="info-player">
                    <div className="row">
                        {this.renderInfoSection(this.state.iconVidas, this.props.texto[0])}
                        {this.renderInfoSection(this.state.iconMoedas, this.props.texto[1])}
                        {this.renderInfoSection(this.state.iconMapa, this.props.texto[2])}
                    </div>
                </div>
        );
    }
}

export default Info;