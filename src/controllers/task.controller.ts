import { Request, response, Response } from 'express';
import Task from '../models/task.model';
import { CreateTaskDto } from 'src/dtos/CreateTask.dto';

import { query, validationResult, matchedData } from 'express-validator';

interface ITask {
    name: string;
    description: string;
}

export function createTask(req: Request<{}, {}, CreateTaskDto>, res: Response): any {
    const result = validationResult(req);

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() })

    const { name, description } = matchedData(req);
    Task.create({ name, description })
        .then((task: ITask) => res.status(201).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function getAllTasks(req: Request, res: Response): void {
    Task.findAll()
        .then((task: ITask) => res.status(200).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function getTaskById(req: Request, res: Response): any {
    const result = validationResult(req)

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() })

    const { id } = matchedData(req)
    Task.findByPk(id)
        .then((task: ITask) => res.status(200).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function updateTask(req: Request, res: Response): any {
    const result = validationResult(req);

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() })

    const id = req.params.id;
    const { name, description } = req.body;

    console.log(name, description)

    Task.update({ name, description }, { where: { id } })
        .then(() => res.status(200).json({ name: name, description: description}))
        .catch((err: Error) => res.status(500).json(err));
}

export function deleteTask(req: Request, res: Response): any {
    const result = validationResult(req);

    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() })

    const { id } = matchedData(req)
    
    Task.findByPk(id)
        .then((task: ITask) => Task.destroy({ where: { id } })
            .then(() => res.status(200).json(task))
            .catch((err: Error) => res.status(500).json(err)))
        .catch((err: Error) => res.status(500).json(err));
}

