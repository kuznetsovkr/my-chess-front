import React from 'react';
import Board from "../chess/assets/chessBoard.png";
import './onboard.css'


export default function Front() {
    return (
            <div style={{display:"flex",flexDirection: "row", marginLeft: "15vw"}}>
                <div>
                    <p className='nickname_user'>Игрок 2</p>
                    <img src={Board} style={{width:720, height:720}}/>
                    <p className='nickname_user'>Игрок 1</p>
                </div>
            </div>

    );
}
