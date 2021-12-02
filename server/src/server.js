require('dotenv').config();
const express = require('express');
const mongoDatabaseUrl = require('./database/mongo.database');

// routes
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());
// cors

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => console.log('Servidor inicializado....'));