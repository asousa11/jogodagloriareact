import * as React from "react";

class Section extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.estilo} onClick={this.props.acao}/>
        );
    }
}

export default Section;