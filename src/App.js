import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/chat-window/Chat-window';
function ChatApp() {
    return (
      <main className="main">
        <ChatWindow/>
      </main>
    );
}

export default ChatApp;
