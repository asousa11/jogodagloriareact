import * as React from "react";

class InfoSection extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col">
                <div className="text-right col">
                    <i className={this.props.icon}/>
                </div>
                <div className="col">
                    <p>{this.props.texto}</p>
                </div>
            </div>
        );
    }
}

export default InfoSection;

