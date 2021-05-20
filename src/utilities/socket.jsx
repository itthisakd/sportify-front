import io from "socket.io-client";
import localStorageService from "../services/localStorageService";

const setUpSocket = ({ socket }) => {
  const token = localStorageService.getToken();
  if (token && !socket) {
    const newSocket = io(import.meta.env.VITE_BASE_URL, {
      extraHeaders: {
        token: localStorageService.getToken(),
      },
      withCredentials: true,
    });

    newSocket.on("disconnect", () => {
      // notification.error({
      //   description: "Socket Disconnected!",
      // });
      console.log("Socket Disconnected");
      return null;
    });

    newSocket.on("connect", () => {
      // notification.success({
      //   description: "Socket Connected!",
      // });
      console.log("Socket Connected");
    });

    return newSocket;
  }
};

export default setUpSocket;
