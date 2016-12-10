import io from 'socket.io-client';

let socket = io.connect('https://sznrbrt-node-chat-server.herokuapp.com/');

export default socket;
