import io from 'socket.io-client';

let socket = io.connect('http://localhost:1515/');

export default socket;
