import React from 'react';
import {
  Input,
  OutlinedInput,
  Button,
  Popper,
  Typography,
  TextField,
  ClickAwayListener,
  withStyles,
  List,
} from "@material-ui/core";
// import "./style.css";

const styles = (theme) => ({
  root: {
    width: "98%",
    backgroundColor: theme.palette.chat.secondary,
    color: theme.palette.chat.main,
    borderColor: theme.palette.secondary.main,
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: theme.palette.secondary.main,
    color: "white !important",
  },
});

class ChatInput extends React.Component {

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

    // socket.on('chat message', function (msg) {
    //   let newMessage = document.createElement("li");
    //   newMessage.innerHTML = msg;
    //   document.getElementById("messages").appendChild(newMessage);
    //   window.scrollTo(0, document.body.scrollHeight)
    //   messageContainer.scrollTop = messageContainer.scrollHeight;

    // })
  }




  render() {
    const { classes } = this.props;

    return (
      <div>
        <form id="chat-form" action="">
          <OutlinedInput
            id="m"
            autoComplete="off"
            className={(classes.root)}
          />
        </form>
      </div>
    );
  }

}

export default withStyles(styles)(ChatInput);