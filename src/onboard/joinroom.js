import React from 'react'
import JoinGame from './joingame'
import ChessGame from '../chess/ui/chessgame'
import Board_before_game from "./board_before_game";
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";


/**
 * Onboard is where we create the game room.
 */


class Joinroom extends React.Component {
    state = {
        didGetUserName: false,
        inputText: ""
    }

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
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
                <React.Fragment>
                    <JoinGame userName = {this.state.inputText} isCreator = {false}/>
                    <ChessGame myUserName = {this.state.inputText}/>
                </React.Fragment>
            :
                    <div style={{backgroundColor:"#f4f4f4"}}>
                        <Header/>
                        <Container>
                            <Row>
                                <Col className='col-8'>
                                    <Board_before_game/>
                                </Col>
                                <Col className='col-4 input_name'>
                                        <p style={{maxWidth: "300px"}}>Для начала игры введите ваше имя </p>
                                        <input
                                            ref = {this.textArea}
                                            onInput = {this.typingUserName}
                                            placeholder={"Это имя увидит ваш соперник"}>
                                        </input>

                                        <button className="btn btn-primary"
                                                disabled = {!(this.state.inputText.length > 0)}
                                                onClick = {() => {
                                                    // When the 'Submit' button gets pressed from the username screen,
                                                    // We should send a request to the server to create a new room with
                                                    // the uuid we generate here.
                                                    this.setState({
                                                        didGetUserName: true
                                                    })
                                                }}>Начать играть!</button>
                                </Col>
                            </Row>

                        </Container>
                    </div>
            }
            </React.Fragment>)
    }
}

export default Joinroom
