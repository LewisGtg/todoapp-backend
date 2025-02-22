import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./db";
import Task from "./models/task.model";
import router from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(router);

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