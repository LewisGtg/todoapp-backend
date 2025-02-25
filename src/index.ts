import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./db";
import router from "./routes";
import cors from "cors";
import corsOptions from "./config/cors.config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(router);
app.use(cors(corsOptions));

app.listen(port, async () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }   

    // await Task.sync({ force: true });
    // console.log('All models were synchronized successfully.');
})