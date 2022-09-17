
const socketio = require('socket.io');
var io;

const SocketFunction = (io) => {
    io.on("connection", (socket) => {
        console.log("userConnected", socket.id);
        
        socket.on("join_room", (data) => {
            socket.join(data);
            console.log(`user with id ${socket.id} joined the room ${data}`);
        })

        socket.on("send_message", (data) => {
            console.log(data);
            socket.to(data.room).emit("receive_message", data)
        })

        socket.on("disconnect", () => {
            console.log('user Disconnected', socket.id);
        })
    })

}
module.exports = { SocketFunction };