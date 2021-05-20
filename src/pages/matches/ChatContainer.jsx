import React, { useState } from "react";
import setUpSocket from "../../utilities/socket";
import Textfield from "@material-ui/core/TextField";

const socket = setUpSocket({ socket: null });

export default function ChatContainer() {
  const [msg, setMsg] = useState("");
  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(msg);
      }}
    >
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
        <Textfield
          type="text"
          placeholder="Send new message"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

// import React, { useState } from "react";
// import setUpSocket from "../../utilities/socket";
// import Textfield from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// const socket = setUpSocket({ socket: null });

// export default function ChatContainer() {
//   const [msg, setMsg] = useState("");

//   socket.on("message", (message) => {
//     console.log(message);
//   });

//   return (
//     <form>
//       <TextField variant="outlined" />
//       <Button>SEND</Button>
//     </form>
//   );
// }
