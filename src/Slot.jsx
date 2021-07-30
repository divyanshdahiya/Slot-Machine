import React from 'react';

const Slot = () => {


    var emoji = [
        '😍','😂','😡','😎',
        ];

    let x = emoji[Math.floor(Math.random() * emoji.length)];
    let y = emoji[Math.floor(Math.random() * emoji.length)];
    let z = emoji[Math.floor(Math.random() * emoji.length)];

    if ((x===y) && (y===z) ){
        return(
            <>
            <div>
                <h1>{x} {y} {z} </h1>
                <h1>JACKPOT!!! You won </h1>
                <hr/>
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <div>
                <h1>{x} {y} {z} </h1>
                <h1>Better Luck Next TIme</h1>
                <hr/>
            </div>
            </>
        )
    }
}

export default Slot;