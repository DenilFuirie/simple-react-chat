import React from 'react';
import io from 'socket.io-client'



function JoinBlock() {



    return (
        <div className="wrapper">
            <div className="join-block">
                1111
                <input type="text" placeholder="Room id" value='' />
                <input type="text" placeholder="Your name" value='' />
                <button className='btn btn-success'>ВОЙТИ</button>
            </div>
        </div>
    );
}

export default JoinBlock;