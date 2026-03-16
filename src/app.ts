import express, { type Application } from 'express';
import { prisma } from './lib/prisma.js';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/', (req, res) => {
    res.send('Server is running 🚀');
});

app.get('/user', (req, res) => {

    // const data = prisma.user.findMany();
    // const data = prisma.profile.findMany();

    res.send('find him');
})

export default app;