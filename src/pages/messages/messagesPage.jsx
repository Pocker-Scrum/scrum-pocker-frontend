import { Button, Chip, TextField } from '@mui/material';
import React, { Component } from 'react';
import SocketIO from 'socket.io-client';
const APIConnected = 'http://localhost:5000'

export default class MessagePage extends Component {    
    constructor(){
        super();
        this.state={
            dataApi: '',
            listMessages:[]
        }
    }
    render() { 
        return (
            <div>
                {this.state.listMessages.map( message => (
                    <Chip label={message} />
                ))}
                <TextField id="outlined-basic" label="Message" variant="outlined" />                
                <Button variant='contained' onClick={this.sendMessage('hi')}>Send</Button>
            </div>
        );
    }

    sendMessage(message){
        console.log(message)
        const socket = SocketIO(APIConnected);
        let messages = [];        
        socket.emit('message',message);
        socket.on('message', data =>{
            messages.push(data);
        });
        console.log('messages:' + messages)
    }

}