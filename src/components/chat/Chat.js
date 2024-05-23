import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Chat.css"
import Lighting from './Lighting';

export default function Chat({ responseProps, time: { hours, minutes } }) { 
    const text = responseProps
        .split(' ')
        .map((el) => { 
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
                    <span className='chat__name'>
                        GE
                    </span>
                </div>
                <span className="chat__timer">
                {hours ? `${hours}h ${minutes}m ago` :  `${minutes}m ago`}
                </span>
            </div>
            
            <div className="chat__message-wrapper">
                {text}
            </div>
        </div>
    )
}