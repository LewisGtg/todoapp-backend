import cors from 'cors';

const corsOptions: cors.CorsOptions = {
    origin: 'localhost:5173', // Update this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

export default corsOptions;
