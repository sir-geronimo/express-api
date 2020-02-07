import dotenv from 'dotenv';
import App from './app';
dotenv.config();

// Controllers
import HomeController from './controllers/home.controller';

let port: number;
const env: string|undefined = process.env.NODE_ENV;

switch (env) {
    case 'development':
        port = 8080;
        break;
    case 'production':
        port = 5000;
        break;
    default:
        break;
}

function main() {
    const app = new App([
        new HomeController()
    ], port);

    app.listen(env);
}

main();