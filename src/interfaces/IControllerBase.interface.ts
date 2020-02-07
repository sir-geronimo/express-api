import { Router, Response, Request } from "express";

export default interface IControllerBase {
    path: string;
    router: Router;

    get(req: Request, res: Response): any;
    getMany(req: Request, res: Response): any;
    create(req: Request, res: Response): any;
    update(req: Request, res: Response): any;
    delete(req: Request, res: Response): any;
}