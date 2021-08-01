import React from 'react';
import './index.css';

const Slot1 = () => {


    var emoji = [
        '😍','😂','😡','😎',
        ];

    let x = emoji[Math.floor(Math.random() * emoji.length)];
    let y = emoji[Math.floor(Math.random() * emoji.length)];
    let z = emoji[Math.floor(Math.random() * emoji.length)];

    if ((x===y) && (y===z) ){
        return(
            <>
            <div className="slot">
                <h1>{x} {y} {z} </h1>
                <h2>JACKPOT!!! You won </h2>
                
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <div className="slot">
                <h1>{x} {y} {z} </h1>
                <h2>Better Luck Next Time</h2>
                
            </div>
            </>
        )
    }
}

export default Slot1;