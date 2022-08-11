import React, { useState } from 'react';
import Board from "../chess/assets/chessBoard.png";
import './onboard.css'

export default function Board_before_game() {
    return (
            <div className='container_board_before'>
                <div>
                    <p className='nickname_user'>Игрок 2</p>
                    <img className='board_before' src={Board}/>
                    <p className='nickname_user'>Игрок 1</p>
                </div>
            </div>

    );
}
