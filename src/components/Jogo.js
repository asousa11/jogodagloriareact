import * as React from "react";
import Menu from "./Menu";
import Info from "./Info";
import logo from "../img/logo.png";
import coroa from "../img/crown.png"
import caveira from "../img/skull.png"
import casa6 from "../img/casa6.svg"
import casa18 from "../img/casa18.svg"
import casa33 from "../img/casa33.svg"
import casa40 from "../img/casa40.svg"
import casa42 from "../img/casa42.svg"
import casa12 from "../img/casa12.svg"
import casa25 from "../img/casa25.svg"
import casa49 from "../img/casa49.svg"
import Timer from "./Timer";
import InfoTurn from "./InfoTurn";
import Swal from 'sweetalert2'
import ZonaCentro from "./ZonaCentro";
import Inventario from "./Inventario";
import ZonaPergunta from "./ZonaPergunta";

class Jogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jogada : 0,
            mostrarChaves: false,
            mostrarPergunta: false,
            openLoja: false,
            escolhaChave: false,
            face:0,
            jogador1: {name:"Jogador1",posicao:0, carteira:0, vidas:5, mapParts:0, playable: true, icon:"fas fa-chess-king"},
            inventarioJogador:{
                chaveAzul: 0,
                chaveVermelha: 0,
                chaveVerde: 0,
                corda: 0,
                mascara: 0,
                protetor: 0,
                recordacoes: 0,
                agua: 0,
                cozido: 0
            },
            maxTabuleiro: 50,
            pergunta:{id:Math.floor(Math.random()*10)+1,texto:"", imagem:"", opcao1:"", opcao2:"", opcao3:"", opcao4:""},
            loja : {},
            casa12 : "Cofre Azul",
            casa25 : "Cofre Vermelho",
            casa49 : "Cofre Verde"
        };
    }

    removeMoeda = (pos, value) => {
        this.setState({
            jogador1:{name:"Jogador 1", posicao:pos, playable: this.state.jogador1.playable, vidas:this.state.jogador1.vidas, carteira:this.state.jogador1.carteira - value, mapParts:this.state.jogador1.mapParts, icon:"fas fa-chess-king"}
        });
    }
    addMoeda = (value) => {
        this.setState({
            jogador1:{name:"Jogador 1", posicao:this.state.jogador1.posicao, vidas:this.state.jogador1.vidas, playable: this.state.jogador1.playable, carteira:this.state.jogador1.carteira + value, mapParts:this.state.jogador1.mapParts, icon:"fas fa-chess-king"}
        });
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Boa !!',
            text: 'Ganhaste uma moeda! Agora tens ' + this.state.jogador1.carteira + ' moeda(s)',
            showConfirmButton: false,
            timer: 3500
        })
    }

    removeVida = (value) => {
        if (this.state.jogador1.vidas - value > 0){
            this.setState({
                jogador1:{name:"Jogador 1", posicao:this.state.jogador1.posicao,playable: this.state.jogador1.playable, vidas:this.state.jogador1.vidas - value, carteira:this.state.jogador1.carteira, mapParts:this.state.jogador1.mapParts, icon:"fas fa-chess-king"}
            });
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops',
                text: 'Perdeste uma vida. Tens agora ' + this.state.jogador1.vidas + ' vidas.Mais atenção para a próxima!',
                showConfirmButton: false,
                timer: 3500
            })
        }else {
            Swal.fire({
                imageUrl: caveira,
                imageHeight: 200,
                title: 'Oh...! O ' + this.state.jogador1.name + ' morreu.',
                text: 'Clica no botão abaixo para jogares novamente.',
                confirmButtonText: `Jogar novamente`,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            })
        }
    }

    updateNextQuestion = () => {
        this.setState({pergunta: {
                id: Math.floor(Math.random()*10)+1,
                texto: this.state.pergunta.texto,
                imagem: this.state.pergunta.imagem,
                opcao1: this.state.pergunta.opcao1,
                opcao2: this.state.pergunta.opcao2,
                opcao3: this.state.pergunta.opcao3,
                opcao4: this.state.pergunta.opcao4
            }
        })
    }

    checkCasaEspecial = (x) => {
        const Casasespeciais = [6,12,25,49,18,33,40,42]
        return Casasespeciais.includes(x);
    }

    abrirFecharLoja = () => {
        this.setState({openLoja: !this.state.openLoja})

    }

    lancarDado = () => {
        this.setState({jogada : this.state.jogada + 1})
        let dadoValue = Math.floor(Math.random()*6)+1;
        // let dadoValue = 12;
        let pos;
        if (this.state.jogador1.playable !== false){
            if (this.state.jogador1.posicao+dadoValue > this.state.maxTabuleiro){
                pos = Math.floor(this.state.jogador1.posicao+dadoValue - this.state.maxTabuleiro)+1;
                this.setState({face:dadoValue, jogador1:{name:"Jogador 1", posicao:pos, playable: this.state.jogador1.playable, vidas:this.state.jogador1.vidas, carteira:this.state.jogador1.carteira, mapParts:this.state.jogador1.mapParts, icon:"fas fa-chess-king"}});
            }
            else {
                pos = this.state.jogador1.posicao+dadoValue;
                this.setState({face:dadoValue, jogador1:{name:"Jogador 1", posicao:pos, playable: this.state.jogador1.playable, vidas:this.state.jogador1.vidas, carteira:this.state.jogador1.carteira, mapParts:this.state.jogador1.mapParts, icon:"fas fa-chess-king"}});
            }
            this.handlerCasas(pos);
        } else{
            this.changeMostrarPergunta()
            this.getPergunta();
        }

        // alert(this.state.jogador1.posicao)

    }

    handlerCasas = (pos) => {
        if (this.checkCasaEspecial(pos)) {
            switch (true) {
                case (pos === 6): // Santa Maria
                    if (this.state.jogador1.carteira >= 3) {
                        Swal.fire({
                            imageUrl: casa6,
                            imageHeight: 100,
                            position: 'center',
                            icon: 'success',
                            title: 'Santa Maria',
                            text: 'Fizeste uma viagem para ver baleias. Custou 3 moedas.',
                            showConfirmButton: false,
                            timer: 3500
                        })
                        this.removeMoeda(pos, 3);
                    } else {
                        if (this.state.jogador1.playable){
                            Swal.fire({
                                    imageUrl: casa6,
                                    imageHeight: 100,
                                    position: 'center',
                                    html: '<h1>Santa Maria</h1>' +
                                        'Não tens dinheiro para a viagem para ver baleias. <br> Terás de fazer trabalho comunitário !!',
                                }
                            );
                            this.changePlayerPlayable();
                            this.changeMostrarPergunta();
                            this.getPergunta();
                        } else{
                        }
                    }
                        break;

                    case (pos === 12): // São Miguel
                        if (this.state.inventarioJogador.chaveAzul !== 0 || this.state.inventarioJogador.chaveVerde !== 0 || this.state.inventarioJogador.chaveVermelha !== 0){
                            this.setState({mostrarPergunta:false, mostrarChaves:true});
                        } else {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Oops',
                                text: 'Não tens nenhuma chave.',
                                showConfirmButton: false,
                                timer: 2500
                            }).then(
                                () => this.removeVida(1)
                            );
                        }
                        break;
                    case (pos === 25): // Graciosa
                        if (this.state.inventarioJogador.chaveAzul !== 0 || this.state.inventarioJogador.chaveVerde !== 0 || this.state.inventarioJogador.chaveVermelha !== 0){
                            this.setState({mostrarPergunta:false, mostrarChaves:true});
                        } else {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Oops',
                                text: 'Não tens nenhuma chave.',
                                showConfirmButton: false,
                                timer: 2500
                            }).then(
                                () => this.removeVida(1)
                            );
                        }
                        break;
                    case (pos === 49): // Pico
                        if (this.state.inventarioJogador.chaveAzul !== 0 || this.state.inventarioJogador.chaveVerde !== 0 || this.state.inventarioJogador.chaveVermelha !== 0){
                            this.setState({mostrarPergunta:false, mostrarChaves:true});
                        } else {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Oops',
                                text: 'Não tens nenhuma chave.',
                                showConfirmButton: false,
                                timer: 2500
                            }).then(
                                () => this.removeVida(1)
                            );
                        }
                        break;
                    case (pos === 18): // Terceira
                        if (this.state.jogador1.carteira >= 3) {
                            Swal.fire({
                                imageUrl: casa18,
                                imageHeight: 100,
                                position: 'center',
                                icon: 'success',
                                title: 'Terceira',
                                text: 'Assististe a uma tourada à corda. Custou 3 moedas.',
                                showConfirmButton: false,
                                timer: 3500
                            })
                            this.removeMoeda(pos,3);
                        } else {
                            Swal.fire({
                                    imageUrl: casa18,
                                    imageHeight: 100,
                                    position: 'center',
                                    html: '<h1>Terceira</h1>' +
                                        'Não tens dinheiro para uma tourada à corda. <br> Terás de fazer trabalho comunitário !!',
                                });

                            this.changePlayerPlayable()
                            this.changeMostrarPergunta();
                            this.getPergunta();
                        }
                        break;
                    case (pos === 33): // São Jorge
                        if (this.state.jogador1.carteira >= 3) {
                            Swal.fire({
                                imageUrl: casa33,
                                imageHeight: 100,
                                position: 'center',
                                icon: 'success',
                                title: 'São Jorge',
                                text: 'Fizeste uma viagem à Fajã do Santo Cristo. Custou 3 moedas.',
                                showConfirmButton: false,
                                timer: 3500
                            })
                            this.removeMoeda(pos,3);

                        } else {
                            Swal.fire({
                                    imageUrl: casa33,
                                    imageHeight: 100,
                                    position: 'center',
                                },
                                'São Jorge',
                                'Não tens dinheiro para uma viagem à Fajã do Santo Cristo. <br> Terás de fazer trabalho comunitário!',
                                'info'
                            );
                            this.changePlayerPlayable()
                            this.changeMostrarPergunta();
                            this.getPergunta();
                        }
                        break;
                    case (pos === 40): // Flores
                        if (this.state.jogador1.carteira >= 3) {
                            Swal.fire({
                                imageUrl: casa40,
                                imageHeight: 100,
                                position: 'center',
                                icon: 'success',
                                title: 'Flores',
                                text: 'Fizeste uma viagem à Rocha dos Bordões. Custou 3 moedas.',
                                showConfirmButton: false,
                                timer: 3500
                            })
                            this.removeMoeda(pos,3);

                        } else {
                            Swal.fire({
                                    imageUrl: casa40,
                                    imageHeight: 100,
                                    position: 'center',
                                },
                                'Flores',
                                'Não tens dinheiro para uma viagem à Rocha dos Bordões. <br> Terás de fazer trabalho comunitário !!',
                                'info'
                            );
                            this.changePlayerPlayable()
                            this.changeMostrarPergunta();
                            this.getPergunta();
                        }
                        break;
                    case (pos === 42): // Corvo
                        if (this.state.jogador1.carteira >= 3) {
                            Swal.fire({
                                imageUrl: casa42,
                                imageHeight: 100,
                                position: 'center',
                                icon: 'success',
                                title: 'Corvo',
                                text: 'Fizeste uma viagem lagoa do Caldeirão. Custou 3 moedas.',
                                showConfirmButton: false,
                                timer: 3500
                            })
                            this.removeMoeda(pos,3);

                        } else {
                            Swal.fire({
                                    imageUrl: casa42,
                                    imageHeight: 100,
                                    position: 'center',
                                },
                                'Corvo',
                                'Não tens dinheiro para uma viagem à Lagoa do Caldeirão. <br> Terás de fazer trabalho comunitário !!',
                                'info'
                            );
                            this.changePlayerPlayable()
                            this.changeMostrarPergunta();
                            this.getPergunta();
                        }
                        break;
                default:
                    console.log("Deu erro nas casas especiais.")
                    }
        } else {
            this.changeMostrarPergunta()
            this.getPergunta()
        }
    }

    changePlayerPlayable = () => {
        let newState = this.state.jogador1;
        newState.playable = !newState.playable
        this.setState({newState});

    }

    changeMostrarPergunta = () => {
        this.setState({mostrarPergunta: !this.state.mostrarPergunta});
    }

    getPergunta = () => {
        fetch("http://localhost:8000/api/perguntas/"+this.state.pergunta.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({pergunta: {
                            id: result.data.id,
                            texto: result.data.texto,
                            imagem: result.data.urlImagem,
                            opcao1: result.data.opcao1,
                            opcao2: result.data.opcao2,
                            opcao3: result.data.opcao3,
                            opcao4: result.data.opcao4
                    }
                    })
                })
    }

    checkResposta = (respostaUser) => {
        fetch("http://localhost:8000/api/perguntas/"+this.state.pergunta.id+"/solucao?opcao="+respostaUser)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.resposta === "correta"){
                        if (!this.state.jogador1.playable) {
                            //Só para sair de trabalho comunitário
                            //Mostrar SA a dizer que saiu de trabalho comunitário
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Boa!',
                                text: 'Acertaste na pergunta e saíste de trabalho comunitário.',
                                showConfirmButton: false,
                                timer: 3500
                            })
                            this.changePlayerPlayable();
                        }else {
                            this.addMoeda(1)
                        }
                    } else {
                        if (this.state.jogador1.posicao === 6 || this.state.jogador1.posicao === 18 || this.state.jogador1.posicao === 33 || this.state.jogador1.posicao === 40 || this.state.jogador1.posicao === 42){
                            if (this.state.jogador1.playable === true){
                                this.changePlayerPlayable();
                            }
                            this.removeVida(1);
                        }else {
                            this.removeVida(1);
                        }
                    }
                })

        this.updateNextQuestion();
        this.changeMostrarPergunta();
    }

    adicionarMapPart = () => {
        if (this.state.jogador1.mapParts +1 === 3){
            Swal.fire({
                imageUrl: coroa,
                imageHeight: '200',
                title: 'PARABÉNS! ' + this.state.jogador1.name + '. Conseguiste todas as partes do mapa.',
                text: 'Clica no botão abaixo para jogares novamente.',
                confirmButtonText: `Jogar novamente`,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            })
        }
        this.setState({
            jogador1:{name:this.state.jogador1.name, posicao:this.state.jogador1.posicao, vidas:this.state.jogador1.vidas, carteira:this.state.jogador1.carteira, mapParts:this.state.jogador1.mapParts + 1, icon:"fas fa-chess-king"}
        });
    }

    escolherChave = (value) => {
        if (this.state.jogador1.posicao === 12) {
            if ("Chave Azul" === value){
                Swal.fire({
                    position: 'center',
                    imageUrl: casa12,
                    imageHeight: '200',
                    title: 'Boa!',
                    text: 'Ganhaste mais uma parte do mapa. Tens agora '+(this.state.jogador1.mapParts+1),
                    showConfirmButton: false,
                    timer: 3500
                }).then(
                    () => this.adicionarMapPart()
                );

            }else {
                if (this.state.inventarioJogador.protetor > 0 && this.state.inventarioJogador.agua > 0)
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'São Miguel',
                        html: "Usaste a chave errada e ficaste preso no ilheu. <br>Foram gastos os seguintes artigos: <br><b>Garrafa de Água</b><br><b>Protetor Solar</b><br><b>",
                        showConfirmButton: false,
                        timer: 4000
                    })
                    this.updateInventarioGarrafaAgua(-1);
                    this.updateInventarioProtetorSolar(-1)
                }else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops',
                        html: 'Usaste a chave errada e ficaste preso no ilheu. <br> Não tinhas os itens necessários para sobreviver.',
                        showConfirmButton: false,
                        timer: 3500
                    }).then(
                        () => this.removeVida(this.state.jogador1.vidas)
                    );
                }
            }
        } else if (this.state.jogador1.posicao === 25){
            if ("Chave Vermelha" === value){
                Swal.fire({
                    position: 'center',
                    imageUrl: casa25,
                    imageHeight: '200',
                    title: 'Boa!',
                    text: 'Ganhaste mais uma parte do mapa. Tens agora '+(this.state.jogador1.mapParts+1),
                    showConfirmButton: false,
                    timer: 3500
                }).then(
                    () => this.adicionarMapPart()
                );
            }else {
                if (this.state.inventarioJogador.mascara > 0 && this.state.inventarioJogador.agua > 0 && this.state.inventarioJogador.corda > 0 )
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'Graciosa',
                        html: "Usaste a chave errada e ficaste preso na Furna do Enxofre. <br>Foram gastos os seguintes artigos : <br><b>Garrafa de Água</b><br><b>Máscara</b><br><b>Corda</b>",
                        showConfirmButton: false,
                        timer: 4000
                    })
                    this.updateInventarioGarrafaAgua(-1);
                    this.updateInventarioMascara(-1)
                    this.updateInventarioCorda(-1)
                }else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops',
                        html: 'Usaste a chave errada e ficaste preso na Furna do Enxofre. <br>Não tinhas os itens necessários para sobreviver.',
                        showConfirmButton: false,
                        timer: 2500
                    }).then(
                        () => this.removeVida(this.state.jogador1.vidas)
                    );
                }
            }
        } else if (this.state.jogador1.posicao === 49){
            if ("Chave Verde" === value){
                Swal.fire({
                    position: 'center',
                    imageUrl: casa49,
                    imageHeight: '200',
                    title: 'Boa!',
                    text: 'Ganhaste mais uma parte do mapa. Tens agora '+(this.state.jogador1.mapParts+1),
                    showConfirmButton: false,
                    timer: 3500
                }).then(
                    () => this.adicionarMapPart()
                );
            }else {
                if (this.state.inventarioJogador.corda > 0 )
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'Pico',
                        html: "Usaste a chave errada e ficaste preso na Montanha. <br>Foram gastos os seguintes artigos : <br><b>Corda</b><br><b>",
                        showConfirmButton: false,
                        timer: 4000
                    })
                    this.updateInventarioCorda(-1)
                }else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops',
                        html: 'Usaste a chave errada e ficaste preso na Montanha. <br>Não tinhas os itens necessários para sobreviver.',
                        showConfirmButton: false,
                        timer: 2500
                    }).then(
                        () => this.removeVida(this.state.jogador1.vidas)
                    );
                }
            }
        }
        this.setState({mostrarChaves:false});
    }

    updateInventarioChaveAzul = (value) => {
        let newState = this.state.inventarioJogador;
        if (value > 0){
            if (newState.chaveAzul > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops',
                    text: 'Não podes comprar esta chave porque já tens uma.',
                    showConfirmButton: false,
                    timer: 3500
                })
            } else{
                if (this.state.jogador1.carteira >= 5){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Boa!',
                        text: 'Adquiriste uma Chave Azul!.',
                        showConfirmButton: false,
                        timer: 3500
                    })
                    //Tem moedas pode comprar
                    this.removeMoeda(this.state.jogador1.posicao,5);
                    newState.chaveAzul += value;
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops',
                        text: 'Não podes comprar esta chave. Não tens moedas suficientes.',
                        showConfirmButton: false,
                        timer: 3500
                    })
                    //Não pode comprar
                }
            }
        }
        this.setState({inventarioJogador: newState});
        // alert(this.state.inventarioJogador.chaveAzul)
    }

    updateInventarioChaveVermelha = (value) => {
        // alert(value);
        let newState = this.state.inventarioJogador;
        //alert(newState.chaveVermelha);
        //alert(newState.chaveVermelha > 0)
        if (value > 0){
            if (newState.chaveVermelha > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops',
                    text: 'Não podes comprar esta chave porque já tens uma.',
                    showConfirmButton: false,
                    timer: 3500
                })
                //alert(newState.chaveVermelha);
                //Nao pode comprar pq ja tem
            } else{
                if (this.state.jogador1.carteira >= 5){
                    //Tem moedas pode comprar

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Boa!',
                        text: 'Adquiriste uma Chave Vermelha!.',
                        showConfirmButton: false,
                        timer: 3500
                    })
                    this.removeMoeda(this.state.jogador1.posicao,5);
                    newState.chaveVermelha += value;
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops',
                        text: 'Não podes comprar esta chave. Não tens moedas suficientes.',
                        showConfirmButton: false,
                        timer: 3500
                    })
                    //Não pode comprar
                }
            }
        }
        this.setState({inventarioJogador: newState});
        //alert(this.state.inventarioJogador.chaveVermelha)
    }

    updateInventarioChaveVerde = (value) => {
        let newState = this.state.inventarioJogador;
        if (value > 0){
            if (newState.chaveVerde > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops',
                    text: 'Não podes comprar esta chave porque já tens uma.',
                    showConfirmButton: false,
                    timer: 3500
                })
                //Não pode comprar, ja tem
            } else{
                if (this.state.jogador1.carteira >= 5){
                    //Tem moedas pode comprar

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Boa!',
                        text: 'Adquiriste uma Chave Verde!.',
                        showConfirmButton: false,
                        timer: 3500
                    })
                    this.removeMoeda(this.state.jogador1.posicao,5);
                    newState.chaveVerde += value;
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops',
                        text: 'Não podes comprar esta chave. Não tens moedas suficientes.',
                        showConfirmButton: false,
                        timer: 3500
                    })
                    //Não pode comprar
                }
            }
        }
        this.setState({inventarioJogador: newState});
    }

    updateInventarioCorda = (value) => {
        let newState = this.state.inventarioJogador;
        if (value > 0){
            if (this.state.jogador1.carteira >= 2){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Boa!',
                    text: 'Corda adquirida.',
                    showConfirmButton: false,
                    timer: 3500
                })
                newState.corda += value;
                this.removeMoeda(this.state.jogador1.posicao,2);
            }else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops',
                    text: 'Não podes comprar este artigo. Não tens moedas suficientes.',
                    showConfirmButton: false,
                    timer: 3500
                })
            }
        }else{
            newState.corda += value;
        }
        this.setState({inventarioJogador: newState});
    }

    updateInventarioMascara = (value) => {
        let newState = this.state.inventarioJogador;
        if (value > 0){
            if (this.state.jogador1.carteira >= 2){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Boa!',
                    text: 'Máscara adquirida.',
                    showConfirmButton: false,
                    timer: 3500
                })
                this.removeMoeda(this.state.jogador1.posicao,2);
                newState.mascara += value;
            }else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops',
                    text: 'Não podes comprar este artigo. Não tens moedas suficientes.',
                    showConfirmButton: false,
                    timer: 3500
                })
            }
        }else{
            newState.mascara += value;
        }
        this.setState({inventarioJogador: newState});
    }

    updateInventarioProtetorSolar = (value) => {
        let newState = this.state.inventarioJogador;
        if (value > 0){
            if (this.state.jogador1.carteira >= 2){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Boa!',
                    text: 'Protetor solar adquirido.',
                    showConfirmButton: false,
                    timer: 3500
                })
                this.removeMoeda(this.state.jogador1.posicao,2);
                newState.protetor += value;
            }else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops',
                    text: 'Não podes comprar este artigo. Não tens moedas suficientes.',
                    showConfirmButton: false,
                    timer: 3500
                })
            }
        }else{
            newState.protetor += value;
        }
        this.setState({inventarioJogador: newState});
    }

    updateInventarioRecordacoesVarias = (value) => {
        let newState = this.state.inventarioJogador;
        if (value > 0){
            if (this.state.jogador1.carteira >= 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Boa!',
                    text: 'Recordação Adquirida.',
                    showConfirmButton: false,
                    timer: 3500
                })
                this.removeMoeda(this.state.jogador1.posicao,1);
                newState.recordacoes += value;
            }else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops',
                    text: 'Não podes comprar este artigo. Não tens moedas suficientes.',
                    showConfirmButton: false,
                    timer: 3500
                })
            }
        }else{
            newState.recordacoes += value;
        }
        this.setState({inventarioJogador: newState});
    }

    updateInventarioGarrafaAgua = (value) => {
        let newState = this.state.inventarioJogador;
        if (value > 0){
            if (this.state.jogador1.carteira >= 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Boa!',
                    text: 'Garrafa de água adquirida.',
                    showConfirmButton: false,
                    timer: 3500
                })
                this.removeMoeda(this.state.jogador1.posicao,1);
                newState.agua += value;
            }else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Oops',
                    text: 'Não podes comprar este artigo. Não tens moedas suficientes.',
                    showConfirmButton: false,
                    timer: 3500
                })
            }
        }else{
            newState.agua += value;
        }
        this.setState({inventarioJogador: newState});
    }

    updateInventarioCozidoFurnas = () => {
        //Este dá vida, não adiciona ao inventario
        let newState = this.state.jogador1;
        if (this.state.jogador1.carteira >= 3){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Boa!',
                text: 'Cozido das Furnas adquirido. Ganhaste 1 vida extra.',
                showConfirmButton: false,
                timer: 3500
            })
            this.removeMoeda(this.state.jogador1.posicao,3);
            newState.vidas += 1;
        }else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops',
                text: 'Não podes comprar este artigo. Não tens moedas suficientes.',
                showConfirmButton: false,
                timer: 3500
            })
        }
        this.setState({jogador1: newState});
    }

    getChavesUser = () => {
        let arrayChaves = [];
        if (this.state.inventarioJogador.chaveAzul === 1){
            arrayChaves.push("Chave Azul")
        }
        if (this.state.inventarioJogador.chaveVerde === 1){
            arrayChaves.push("Chave Verde")
        }
        if (this.state.inventarioJogador.chaveVermelha === 1){
            arrayChaves.push("Chave Vermelha")
        }
        // console.log(arrayChaves);
        return arrayChaves;
    }

    render() {
        const chavesUser = this.getChavesUser();
        const infoProps = [this.state.jogador1.vidas, this.state.jogador1.carteira, this.state.jogador1.mapParts];
        return (
            <div className="game container-fluid">
                <div className="row">
                    <div className="col-md-2 text-center">
                        <div className="col">
                            <img alt="logo segredos dos açores" className="game-logo w-100" src={logo}/>
                        </div>
                        <Menu
                            faceDado={this.state.face}
                            acao1={this.lancarDado}
                            acao2={this.abrirFecharLoja}
                        />
                    </div>
                    <div className="col-md-8 text-center">
                        <div className="perguntas">
                            <div className="row">
                                <div className="col-md-3" style={{height: 200+`px`}}>
                                    <img className="imagemPergunta" src={this.state.pergunta.imagem}
                                         alt=""/>
                                </div>
                                <div className="pergunta text-center col-md-8">
                                    <ZonaPergunta
                                    /*Props ZonaPergunta*/
                                    mostrarPergunta={this.state.mostrarPergunta}
                                    mostrarChaves={this.state.mostrarChaves}
                                    /*Props Pergunta*/
                                    id={this.state.pergunta.id}
                                    texto={this.state.pergunta.texto}
                                    opcao1={this.state.pergunta.opcao1}
                                    opcao2={this.state.pergunta.opcao2}
                                    opcao3={this.state.pergunta.opcao3}
                                    opcao4={this.state.pergunta.opcao4}
                                    imagem={this.state.pergunta.imagem}
                                    onAnswer={this.checkResposta}
                                    /*Props Chave*/
                                    chavesUser={chavesUser}
                                    escolherChave={this.escolherChave}
                                    />
                                    {/*{this.renderPergunta()}*/}
                                </div>
                            </div>
                        </div>
                        <ZonaCentro
                            iconJogador={this.state.jogador1.icon}
                            posicaoJogador={this.state.jogador1.posicao}
                            // jogada = {this.state.jogada}
                            cofre1={this.state.cofre1}
                            cofre2={this.state.cofre2}
                            cofre3={this.state.cofre3}
                            updateInventarioChaveAzul={this.updateInventarioChaveAzul}
                            updateInventarioChaveVermelha={this.updateInventarioChaveVermelha}
                            updateInventarioChaveVerde={this.updateInventarioChaveVerde}
                            updateInventarioCorda={this.updateInventarioCorda}
                            updateInventarioMascara={this.updateInventarioMascara}
                            updateInventarioProtetorSolar={this.updateInventarioProtetorSolar}
                            updateInventarioRecordacoesVarias={this.updateInventarioRecordacoesVarias}
                            updateInventarioGarrafaAgua={this.updateInventarioGarrafaAgua}
                            updateInventarioCozidoFurnas={this.updateInventarioCozidoFurnas}
                            botaoFechar={this.abrirFecharLoja}
                            openLoja={this.state.openLoja}/>
                        {/*{this.renderZonaCentro()}*/}
                    </div>

                    <div className="col-md-2 text-center">
                        <Timer/>
                        <div className="turn text-center">
                            <InfoTurn
                            nome={this.state.jogador1.name}
                            icon={this.state.jogador1.icon}/>
                        </div>
                        <Info
                            texto={infoProps}
                        />
                        <Inventario
                            inventario={this.state.inventarioJogador}
                        />
                    </div>
                </div>
            </div>
        );    }
}

export default Jogo;