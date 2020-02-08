import { MysqlError } from 'mysql';

import IDatabase from './../interfaces/IDatabase.interface';
import { pool, connection } from './../utils/connection';

export default class Database implements IDatabase {
    private tablename: string;
    private fields: string;
    private joins: string;
    private conditions: string;
    private idToDelete: number | string = -1;

    constructor (tablename: string, fields: Array<string>,
            joins: Array<object>, conditions: Array<string>) {    
        this.tablename = tablename;
        this.fields = fields.join(', ');
        this.joins = joins.reduce((accumulator: string, value: any) => {
            accumulator += `${ value.join } JOIN ${ value.table } ON ${ value.condition } `;
            return accumulator;
        }, '');
        this.conditions = conditions.join(' AND ');
    }

    public get(id?: number | string) {
        if (this.conditions === '') {
            return this._getWhere();
        } else {
            if (id) {
                return this._getById(id);
            } else {
                return this._get();
            }
        }
    }
    /**
     * create
     */
    public create(data: any): any {
        throw new Error('Method not implemented.');
    }

    public update(id: number | string, data?: object): any {
        throw new Error('Method not implemented.');
    }

    public delete(id: number | string): any{
        this._delete(id);
    }

    private _getById(id: string | number):void {
        throw new Error("Method not implemented.");
    }

    private _getWhere(): void {
        throw new Error("Method not implemented.");
    }

    private _get(): void {
        throw new Error("Method not implemented.");
    }

    private _delete(id: number | string): boolean {
        if (this.idToDelete !== id) return false;

        connection.beginTransaction((err: MysqlError) => {
            console.log("Delete method");

            if (err) return false;
        });
        
        return true;
    }
}