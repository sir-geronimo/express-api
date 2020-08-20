import express, { Request, Response } from 'express';

import IController from './../interfaces/IController.interface';

export default abstract class ControllerBase implements IController {
    path: string;
    router: express.Router;

    constructor(path: string, router: express.Router) {
        this.path = path;
        this.router = router;
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
            url: req.url,
            title: 'Hola bb one'
        });
    }
    getMany(req: Request, res: Response): Response {
        return res.json({
            url: req.url,
            title: 'Hello bb many'
        });
    }
    create(req: Request, res: Response): Response {
        const data = req.body;
        return res.json({
            url: req.url,
            title: 'Hello bb posty',
            data
        });
    }
    update(req: Request, res: Response): Response {
        const data = req.body;
        return res.json({
            url: req.url,
            title: 'Hola bb put',
            data
        });
    }
    delete(req: Request, res: Response): Response {
        const data = req.body;
        return res.json({
            url: req.url,
            title: 'Hola bb delete',
            data
        });
    }
}