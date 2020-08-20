import dotenv from 'dotenv';
import App from './app';
dotenv.config();

// Controllers
import HomeController from './controllers/home.controller';
import UserController from './controllers/user.controller';
import IController from './interfaces/IController.interface';

let port: number;
const env: string | undefined = process.env.NODE_ENV;

switch (env) {
    case 'development':
        port = 8080;
        break;
    case 'production':
        port = 5000;
        break;
    default:
        port = 8081
        break;
}

function main() {
    const controllers: Array<IController> = [
        new UserController(),
        new HomeController()
    ];

    const app = new App(controllers, port);

    app.listen(env);
}

main();
