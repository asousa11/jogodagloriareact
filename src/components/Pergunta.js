import * as React from "react";

class Pergunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {respostaUser: ""};
    }

    handleChange = (event) => {
        this.setState({respostaUser: event.target.value});
    }

    handleSubmit = (event) => {
        this.props.onAnswer(this.state.respostaUser)
        event.preventDefault()
    }

    render(){
        return (
                <div>
                    <h1>{this.props.texto}</h1>
                    <select id ="resposta" value={this.state.respostaUser} onChange={this.handleChange}>
                        <option selected={true} disabled={true} value="">Escolha a opção...</option>
                        <option value="1">{this.props.opcao1}</option>
                        <option value="2">{this.props.opcao2}</option>
                        <option value="3">{this.props.opcao3}</option>
                        <option value="4">{this.props.opcao4}</option>
                    </select>
                    <button id="confirm-answer-button" type="submit" onClick={this.handleSubmit}>Submeter</button>
                </div>
        );
    }
}

export default Pergunta;