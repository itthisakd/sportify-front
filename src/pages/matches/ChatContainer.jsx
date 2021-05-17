import React from "react";
import { io } from "socket.io-client";

const socket = io();

export default function ChatContainer() {
  return (
    <div>
      <h3>Real time chat room</h3>
      <div>
        <input type="text" placeholder="Change your username" />
        <button type="button">Change</button>
      </div>
      <div>
        <h3>Message Box</h3>
        <ul>Message list</ul>
      </div>
      <div>
        <input type="text" placeholder="Send new message"/>
        <button type="button">Send</button>
      </div>
    </div>
  );
}
