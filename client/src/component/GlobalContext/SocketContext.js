import { createContext, useContext } from "react";
import axios from "axios";
import io from 'socket.io-client';

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
    axios.defaults.withCredentials = true;

    const socket = io.connect("http://localhost:3006");


    return <SocketContext.Provider value={socket}>
        {children}
    </SocketContext.Provider>
}

export const useSocket = () => {
    return useContext(SocketContext)
}