import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  IconButton,
  Container,
  Modal,
  Paper,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { SocketContext } from "../../contexts/SocketContextProvider";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import { DateTime } from "luxon";
import axios from "../../config/axios";
import ConfirmModal from "../shared/ConfirmModal";
import ScrollToBottom from "react-scroll-to-bottom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  chatFromMe: {
    backgroundColor: "#1DA1F2",
    color: "white",
    borderRadius: "12px",
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "7px 10px",
  },
  chatFromYou: {
    backgroundColor: "gainsboro",
    color: "black",
    borderRadius: "12px",
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "7px 10px",
  },
  flexEnd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    margin: "5px 0px",
  },
  flexStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
}));

export default function ChatPage() {
  const classes = useStyles();
  const { id: roomId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [account, setAccount] = useState({ images: [{ image: 0 }] });
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");
  const { newSocket } = useContext(SocketContext);

  newSocket.on("sendChatMessageBack", (message) => {
    console.log(message);
    setMessages([...messages, message]);
    setNewMessages([...newMessages, message]);
  });

  console.log(account);

  const history = useHistory();

  useEffect(() => {
    const getAccount = async () => {
      const res = await axios.get("/account/matched/" + roomId);
      setAccount(res.data);
    };
    const getMessages = async () => {
      const res = await axios.get("/message/" + roomId);
      setMessages(res.data.messages);
    };
    getAccount();
    getMessages();
  }, []);

  const onSend = (e) => {
    e.preventDefault();
    const obj = {
      fromId: account.userId,
      toId: account.id,
      text: textMessage,
      time: +new Date(),
    };
    newSocket.emit("sendChatMessage", obj);
    setMessages([...messages, obj]);
    setNewMessages([...newMessages, obj]);
    setTextMessage("");
  };

  console.log(account);

  const unmatch = async (account) => {
    await axios.delete("/match/" + account.matchId);
    setModalOpen(false);
    history.push("/matches");
  };

  const leave = async () => {
    // newSocket.emit("leaveRoom", roomId);
    await axios.post("/message/", { newMessages });
    history.push("/matches");
  };

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          position: "absolute",
          top: "0px",
        }}
      >
        <Paper
          elevation={2}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            height: "25vw",
          }}
        >
          <IconButton onClick={leave}>
            <ArrowBackIosRoundedIcon fontSize="large" />
          </IconButton>
          <div
            style={{
              padding: "10px",
            }}
            onClick={() => {
              history.push(
                "/viewprofile/" +
                  roomId.split("-").filter((e) => +e !== +account.userId)[0]
              );
            }}
          >
            <img
              src={account?.images[0].image}
              style={{
                width: "12vw",
                height: "12vw",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "50% 50%",
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="body1"
              component="p"
              style={{
                textAlign: "center",
                color: "#EOEOEO",
              }}
            >
              {account.firstName}
            </Typography>
          </div>
          <IconButton
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <HighlightOffRoundedIcon fontSize="large" />
            <ConfirmModal
              message="UNMATCH"
              handleClose={() => {
                setModalOpen(false);
              }}
              open={modalOpen}
              confirmAction={() => {
                unmatch();
                leave();
              }}
              cancelAction={() => {
                setModalOpen(false);
              }}
            />
          </IconButton>
        </Paper>
        <Container
          style={{
            width: "100vw",
            height: "calc(100vh - 35vw - 10px)",
            padding: "15px",
            overflow: "scroll",
            overflowAnchor: "auto",
          }}
        >
          {messages.map((message, idx) => {
            return message.fromId === +account.userId ? (
              <div className={classes.flexEnd} key={idx}>
                <div className={classes.chatFromMe} key={idx}>
                  <Typography variant="body1" component="p" key={idx}>
                    {message.text}
                  </Typography>
                </div>
              </div>
            ) : (
              <div className={classes.flexStart} key={idx}>
                <img
                  src={account?.images[0].image}
                  style={{
                    width: "12vw",
                    height: "12vw",
                    overflow: "hidden",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "50%",
                    margin: "0px 5px 0px 0px",
                  }}
                  key={idx}
                />
                <div className={classes.chatFromYou} key={idx}>
                  <Typography variant="body1" component="p" key={idx}>
                    {message.text}
                  </Typography>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
      <form
        onSubmit={onSend}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100vw",
          position: "absolute",
          bottom: "0px",
          backgroundColor: "white",
          padding: "10px 0px",
        }}
      >
        <TextField
          placeholder="Type here..."
          multiline={true}
          variant="outlined"
          rowsMax="1"
          size="small"
          style={{
            bottom: 0,
            padding: "0px",
            margin: "0px",
            width: "74vw",
            overflow: "scroll",
            position: "sticky",
          }}
          value={textMessage}
          onChange={(e) => {
            setTextMessage(e.target.value);
          }}
          inputProps={{ style: { padding: "0px" } }}
        />
        <Button
          variant="contained"
          style={{
            margin: "0px",
            width: "10vw",
            height: "10vw",
            position: "sticky",
          }}
          size="medium"
          color="secondary"
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
