import express from 'express';
import * as taskController from '../controllers/task.controller';

import { param, checkSchema } from 'express-validator'
import { 
    createTaskValidationSchema,
    getTaskByIdValidationSchema,
    updateTaskValidationSchema,
    deleteTaskValidationSchema
} from '../utils/validationSchemas';

const router = express.Router();

router.get('/', taskController.getAllTasks);

router.post(
    '/', 
    checkSchema(createTaskValidationSchema),
    taskController.createTask
);

router.get(
    '/:id',
    checkSchema(getTaskByIdValidationSchema),
    taskController.getTaskById
);

router.put(
    '/:id',
    checkSchema(updateTaskValidationSchema),
    taskController.updateTask
);

router.delete(
    '/:id',
    checkSchema(deleteTaskValidationSchema), 
    taskController.deleteTask
);

export default router;