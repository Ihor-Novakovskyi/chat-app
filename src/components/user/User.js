import React from 'react';
import ReactDOM from 'react-dom/client';
import Lighting from '../chat/Lighting';
import './User.css'
import Person from './Person.js'; 
export default function User({ requestProps, time: {hours, minutes } }) { 
    return (
        <div className="user">
            <div className="user__header">
                <div className="user__wrapper-inside-header">
                    <div className="user__image">
                        <Person/>
                    </div>
                    <span className='user__name'>
                        You
                    </span>
                </div>
                <span className="user__timer">
                    {hours ? `${hours}h ${minutes}m ago` :  `${minutes}m ago`}
                </span>
            </div>
            <div className="user__greetings-wrapper">
                <span className="user__greetings-text">Hi GI:</span>
            </div>
            <div className="user__message-wrapper">
                <span className="user__message-text">
                    {requestProps}
                </span>
            </div>
        </div>
    )
}