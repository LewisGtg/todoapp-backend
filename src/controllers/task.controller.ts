import { Request, Response } from 'express';
import Task from '../models/task.model';

interface ITask {
    name: string;
    description: string;
}

export function createTask(req: Request, res: Response): void {
    const { name, description } = req.body;
    Task.create({ name, description })
        .then((task: ITask) => res.status(201).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function getAllTasks(req: Request, res: Response): void {
    Task.findAll()
        .then((task: ITask) => res.status(200).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function getTaskById(req: Request, res: Response): void {
    const id = req.params.id;
    Task.findByPk(id)
        .then((task: ITask) => res.status(200).json(task))
        .catch((err: Error) => res.status(500).json(err));
}

export function updateTask(req: Request, res: Response): void {
    const id = req.params.id;
    const { name, description } = req.body;
    Task.update({ name, description }, { where: { id } })
        .then(() => res.status(204).send())
        .catch((err: Error) => res.status(500).json(err));
}

export function deleteTask(req: Request, res: Response): void {
    const id = req.params.id;
    Task.destroy({ where: { id } })
        .then(() => res.status(204).send())
        .catch((err: Error) => res.status(500).json(err));
}

