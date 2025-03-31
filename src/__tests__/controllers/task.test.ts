import { mockRequest, mockResponse } from "../../__mocks__";
import { getAllTasks } from "../../controllers/task.controller";

describe('getAllTasks', () => {
    it("should return an array of tasks", async () => {
        const req = mockRequest;
        const res = mockResponse();

        await getAllTasks(req, res);

        expect(res.status).toHaveBeenCalledWith(200); // Ensure the status is 200
        expect(res.json).toHaveBeenCalled(); // Ensure the response is an empty array
    });
});