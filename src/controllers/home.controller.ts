import express, { Request, Response } from 'express';


import IControllerBase from "../interfaces/IControllerBase.interface";

export default class HomeController implements IControllerBase {
    path: string;
    router: express.Router;

    constructor() {
        this.path = '/';
        this.router = express.Router();
        this.initRoutes();
    }

    private initRoutes(): void {
        this.router.get(`${this.path}/:id`, this.get);
        this.router.get(this.path, this.getMany);
        this.router.post(this.path, this.create);
        this.router.put(`${this.path}/:id`, this.update);
        this.router.delete(`${this.path}/:id`, this.delete);
    }

    get(req: Request, res: Response): any {
        return res.json({
            url: req.url,
            title: 'Hola bb'
        });
    }
    getMany(req: Request, res: Response): any {}
    create(req: Request, res: Response): any {}
    update(req: Request, res: Response): any {}
    delete(req: Request, res: Response): any {}
}