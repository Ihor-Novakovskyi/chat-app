import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Chat.css"
import Lighting from './Lighting';

export default function Chat({responseProps}) { 
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
                    1m ago
                </span>
            </div>
            
            <div className="chat__message-wrapper">
                <span className="chat__message-text">
                    {responseProps}
                </span>
            </div>
        </div>
    )
}