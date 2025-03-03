import express from 'express';
import taskRouter from './task.route';

const router = express.Router();

// Define your routes here
router.use('/api/task', taskRouter);

router.get('/api', (req, res) => {
    res.send('Welcome to the Todo App API');
});

export default router;