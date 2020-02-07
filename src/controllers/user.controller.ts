import express, { Request, Response } from 'express';

import ControllerBase from './../base/Controller.base';

export default class UserController extends ControllerBase {
    constructor() {
        super('/user', express.Router());
        console.log(this.path);
    }
}