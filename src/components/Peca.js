import * as React from "react";

class Peca extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col player text-center" style={{position: "relative"}}>
                <i className={this.props.iconJogador}/>
            </div>
        );
    }
}

export default Peca;