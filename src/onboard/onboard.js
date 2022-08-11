import React from 'react';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid/v4';
import { ColorContext } from '../context/colorcontext';
import './onboard.css';
import Board_before_game from "./board_before_game";
import Header from "./Header";
import FooterPage from "./FooterPage";
import {Col, Container, Row} from "react-bootstrap";
const socket  = require('../connection/socket').socket

/**
 * Onboard is where we create the game room.
 */

class CreateNewGame extends React.Component {
    state = {
        didGetUserName: false,
        inputText: "",
        gameId: ""
    }

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }

    send = () => {
        /**
         * This method should create a new room in the '/' namespace
         * with a unique identifier.
         */
        const newGameRoomId = uuid()

        // set the state of this component with the gameId so that we can
        // redirect the user to that URL later.
        this.setState({
            gameId: newGameRoomId
        })

        // emit an event to the server to create a new room
        socket.emit('createNewGame', newGameRoomId)
    }

    typingUserName = () => {
        // grab the input text from the field from the DOM
        const typedText = this.textArea.current.value

        // set the state with that text
        this.setState({
            inputText: typedText
        })
    }

    render() {
        return (<React.Fragment>
            {
                this.state.didGetUserName ?

                <Redirect to = {"/game/" + this.state.gameId}><button className="btn btn-success" style = {{marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px"}}>Start Game</button></Redirect>

            :
                    <div style={{backgroundColor:"#f4f4f4"}}>
                        <Header/>
                        <Container>
                            <Row>
                                <Col className='col-8'>
                                    <Board_before_game/>
                                </Col>
                                <Col className='col-4 input_name'>
                                    <p>Введите ваше имя</p>
                                    <input
                                        ref = {this.textArea}
                                        placeholder={"Это имя увидит ваш соперник"}
                                        onInput = {this.typingUserName}>
                                    </input>
                                    <button className="btn btn-primary"
                                            disabled = {!(this.state.inputText.length > 0)}
                                            onClick = {() => {
                                                // When the 'Submit' button gets pressed from the username screen,
                                                // We should send a request to the server to create a new room with
                                                // the uuid we generate here.
                                                this.props.didRedirect()
                                                this.props.setUserName(this.state.inputText)
                                                this.setState({
                                                    didGetUserName: true
                                                })
                                                this.send()
                                            }}>Создать игру!</button>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <p className='footer_text'>Кирилл Кузнецов</p>
                            </Row>
                        </Container>
                    </div>

            }
            </React.Fragment>)
    }
}

const Onboard = (props) => {
    const color = React.useContext(ColorContext)

    return <CreateNewGame didRedirect = {color.playerDidRedirect} setUserName = {props.setUserName}/>
}


export default Onboard
