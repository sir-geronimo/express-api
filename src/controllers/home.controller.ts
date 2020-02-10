import express, { Request, Response } from 'express';

import IController from './../interfaces/IController.interface';

export default class HomeController implements IController {
    path: string;
    router: express.Router;

    constructor() {
        this.path = '/';
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes(): void {
        this.router.get(`${this.path}:id`, this.get);
        this.router.get(this.path, this.getMany);
        this.router.post(this.path, this.create);
        this.router.put(`${this.path}:id`, this.update);
        this.router.delete(`${this.path}:id`, this.delete);
    }

    get(req: Request, res: Response): Response {
        return res.json({
            message: 'Welcome Home',
            data: null
        });
    }
    getMany(req: Request, res: Response) {
        return res.status(405).json({
            message: '405 Method Not Allowed',
            data: null
        });
    }
    create(req: Request, res: Response) {
        return res.status(405).json({
            message: '405 Method Not Allowed',
            data: null
        });
    }
    update(req: Request, res: Response) {
        return res.status(405).json({
            message: '405 Method Not Allowed',
            data: null
        });
    }
    delete(req: Request, res: Response) {
        return res.status(405).json({
            message: '405 Method Not Allowed',
            data: null
        });
    }
}