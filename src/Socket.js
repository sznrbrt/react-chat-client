import io from 'socket.io-client';

let socket = io.connect('//localhost:1515/');

export default socket;
