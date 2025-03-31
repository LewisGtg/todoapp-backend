import { Request, Response } from "express";

export const mockRequest = {} as Request;

export const mockResponse = () => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res); // Return `res` to allow chaining
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res as Response;
};