import io from 'socket.io-client';
import { remoteUrl } from './constants/RemoteUrl';

let socket = io.connect(remoteUrl);

export default socket;
