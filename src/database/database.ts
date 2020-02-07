import IDatabase from './../interfaces/IDatabase.interface';
import { pool, connection } from './../utils/connection';

export class Database implements IDatabase{
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
    private _getById(id: string | number):void {
        throw new Error("Method not implemented.");
    }
    private _getWhere(): void {
        throw new Error("Method not implemented.");
    }

    private _get(): void {
        return 
    }
}