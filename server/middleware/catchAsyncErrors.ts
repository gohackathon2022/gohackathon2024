import { NextFunction, Request, Response } from "express";

export const CatchAsyncError = (theFunc:any) => (res:Response, req:Request, next:NextFunction) => {
    Promise.resolve(theFunc(res,req,next)).catch(next);
};