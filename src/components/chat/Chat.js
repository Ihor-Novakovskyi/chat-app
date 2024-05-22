import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Chat.css"
import Lighting from './Lighting';

export default function Chat({ responseProps, time: { hours, minutes } }) { 
    const text = responseProps
        .split(' ')
        .map((el) => { 
            // if (el.length) { 
            //     return el
            //         .split('')
            //         .map((later, id, arr) => { 
            //             const lengthWord = arr.length;
            //             return (
            //                 <span className='chat__message-text'>
            //                 {id !== lengthWord - 1 ? `${later}` : `${later} `}
            //             </span>
            //             )
            //         })
            // }
            return (
                <span className="chat__message-text">
                    {`${el} `}
                </span>
            )
        });
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__wrapper-inside-header">
                    <div className="chat__image">
                        <Lighting/>
                    </div>
                    <span>
                        GE
                    </span>
                </div>
                <span className="timer">
                {hours ? `${hours}h ${minutes}m ago` :  `${minutes}m ago`}
                </span>
            </div>
            
            <div className="chat__message-wrapper">
                {text}
            </div>
        </div>
    )
}