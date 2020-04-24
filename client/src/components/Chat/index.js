import React from 'react';
import "./style.css";

class Chat extends React.Component {

    componentDidMount = () => {
        var socket = window.io();
        const chatForm = document.getElementById('chat-form');
        const message = document.getElementById('m');
        const messageContainer = document.getElementById('message-container');

        chatForm.addEventListener("submit", sendMessage);

        function sendMessage(e) {
            e.preventDefault();
            socket.emit('chat message', message.value);
            message.value = '';
            return false;
        }

        socket.on('chat message', function (msg) {
            let newMessage = document.createElement("li");
            newMessage.innerHTML = msg;
            document.getElementById("messages").appendChild(newMessage);
            window.scrollTo(0, document.body.scrollHeight)
            messageContainer.scrollTop = messageContainer.scrollHeight;

        })
    }




    render() {
        return (
            <div>
                <div id="message-container">
                    <ul id="messages"></ul>
                </div>
                <form id="chat-form" action="">
                    <input id="m" autoComplete="off" /><button id="send">Send</button>
                </form>
            </div>
        );
    }

}

export default Chat;