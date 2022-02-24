import * as React from "react";

class Chaves extends React.Component{
    constructor(props) {
        super(props);
        this.state = {chaveEscolhida: ""}
    }

    handleChange = (event) => {
        this.setState({chaveEscolhida: event.target.value});
    }

    handleSubmit = () => {
        this.props.escolherChave(this.state.chaveEscolhida)
    }


    render() {
        const chavesOPT = this.props.chavesUser.map(
            e => (
                (<option value={e}>{e}</option>)
            )
        );
        return (
            <div>
                <h1>Qual a chave que queres usar?</h1>
                <select id ="chave" value={this.state.chaveEscolhida} onChange={this.handleChange}>
                    <option selected={true} disabled={true} value="">Escolha a opção...</option>
                    {chavesOPT}
                </select>
                <button id="confirm-answer-button" type="submit" onClick={this.handleSubmit}>Submeter</button>
            </div>
        );
    }
}

export default Chaves;