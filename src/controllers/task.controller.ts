import { Request, response, Response } from 'express';
import Task, { TaskAttributes } from '../models/task';
import { CreateTaskDto } from 'src/dtos/CreateTask.dto';
import { v4 as uuidv4 } from 'uuid';

import { validationResult, matchedData } from 'express-validator';

console.log(Task);

export function createTask(req: Request<{}, {}, CreateTaskDto>, res: Response): any {
    const result = validationResult(req);

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() })

    const { userId, title, description } = matchedData(req);
    const id = uuidv4();

    Task.create({ id, title, description, userId })
        .then((task: TaskAttributes) => res.status(201).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function getAllTasks(req: Request, res: Response): void {
    Task.findAll()
        .then((task) => res.status(200).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function getTaskById(req: Request, res: Response): any {
    const result = validationResult(req)

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() })

    const { id } = matchedData(req)
    Task.findByPk(id)
        .then((task) => res.status(200).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function updateTask(req: Request, res: Response): any {
    const result = validationResult(req);

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() })

    const { id, userId } = req.params;
    const { title, description } = req.body;

    Task.update({ id, userId, title, description }, { where: { id } })
        .then(() => res.status(200).json({ title: title, description: description }))
        .catch((err: Error) => res.status(500).json(err));
}

export function deleteTask(req: Request, res: Response): any {
    const result = validationResult(req);

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() })

    const { id } = matchedData(req)
    
    Task.findByPk(id)
        .then((task) => Task.destroy({ where: { id } })
            .then(() => res.status(200).json(task))
            .catch((err: Error) => res.status(500).json(err)))
        .catch((err: Error) => res.status(500).json(err));
}

