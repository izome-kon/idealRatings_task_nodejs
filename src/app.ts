import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import personRoutes from './routes/person.routes';
import connectMongoDB from './config/mongodb';
import dotenv from "dotenv";
import errorHandler from './middlewares/errorHandler';
dotenv.config();

connectMongoDB();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/person', personRoutes);

app.use(errorHandler);

export default app;