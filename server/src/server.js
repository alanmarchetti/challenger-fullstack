require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoDatabaseUrl = require('./database/mongo.database');

// routes
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

// user socket
const { addNewUser, removeExistsUser, getUser, getUsersInARoom } = require('./users');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'HEAD', 'PUT', 'POST', 'PUT', 'PACTH', 'DELETE']
    }
});


app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

io.on('connection', (socket) => {
    socket.on('join', ({ username, roomId }, callback) => {
      const { error, user } = addNewUser({ id: socket.id, username, roomId });
  
      if (error) {
        return callback(error);
      }
  
      socket.join(user.roomId);
  
      socket.emit('message', {
        user: 'admin',
        textContent: `${user.username} has joined!`,
      });
  
      socket.broadcast.to(user.roomId).emit('message', {
        user: 'admin',
        textContent: `${user.username} has joined!`,
      });
  
      io.to(user.roomId).emit('roomDetails', {
        roomId: user.roomId,
        users: getUsersInARoom(user.roomId),
      });
  
      callback();
    });

    socket.on("sendMessage", (message, callback) => {
      const user = getUser(socket.id);

      io.to(user.roomId).emit('message', { user: user.username, textContent: message });

      callback();
    });

    socket.on('disconnect', () => {
      const user = removeExistsUser(socket.id);
  
      if (user) {
        io.to(user.roomId).emit('message', {
          user: 'admin',
          textContent: `${user.username} has left!`,
        });
  
        io.to(user.roomId).emit('roomDetails', {
          roomId: user.roomId,
          users: getUsersInARoom(user.roomId),
        });
      }
    });

});



httpServer.listen(process.env.PORT, () => console.log('Servidor inicializado....'));