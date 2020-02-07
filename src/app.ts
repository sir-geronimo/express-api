import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import IControllerBase from './interfaces/IControllerBase.interface';

class App {
    private app: Application;
    private port: number;

    constructor(controllers: Array<IControllerBase>, port: number) {
        this.app = express();
        this.port = port;

        this.initMiddlewares();
        this.initControllers(controllers);
    }

    private initMiddlewares(): void {
        const middlewares = [
            bodyParser.json(),
            bodyParser.urlencoded({ extended: false }),
            cors(),
            morgan('dev')
        ];

        this.app.use(middlewares);
    }

    private initControllers(controllers: Array<IControllerBase>): void {
        controllers.forEach(_controller => {
            this.app.use('/', _controller.router)
        });
    }

    public listen(env: string|undefined) {
        this.app.listen(this.port, () => {
            console.log(
                `Server listening on port: http://localhost:%d in %s mode`,
                this.port,
                env
            );
        });
    }
}

export default App;