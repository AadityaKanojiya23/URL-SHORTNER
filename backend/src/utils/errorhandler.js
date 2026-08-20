import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errorhandler.js";

export const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }

    console.error(err.stack);
    res.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
}
