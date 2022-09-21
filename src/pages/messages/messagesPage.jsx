import React, { Component } from 'react';
import SocketIO from 'socket.io-client';
const APIConnected = 'http://localhost:5000'

export default class MessagePage extends Component {    
    constructor(){
        super();
        this.state={

        }
    }

    //This method send the socket connection to the backend
    componentDidMount(){
        const socket = SocketIO(APIConnected);
        socket.on();
    }

    render() { 
        return (
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
        );
    }

}