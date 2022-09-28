import { Component } from "react";
import HeaderComponent from "./headerComponent";
import MessageComponent from '../pages/messages/messagesPage'

export default class MainComponent extends Component{
    render(){
        return(
            <div>
                <HeaderComponent />
                <MessageComponent />
            </div>
        );
    };

    
};
