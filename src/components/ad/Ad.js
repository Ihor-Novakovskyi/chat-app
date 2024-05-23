import React from 'react';
import './Ad.css';

export default function Add() { 
    return (
        <div className="add">
            <span className='add__plan'>
                Free plan
            </span>
            <span className="add__slogan">
                There are 10 free requests left
            </span>
            <button className="add__action-buy-plan">
                Buy premium
            </button>
        </div>
    )
}