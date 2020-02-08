import UserEntity from './../entities/user.entity';
import Database from './../database/database';

export default class UserModel {
    tablename: string;
    fields: Array<string>;
    joins: Array<object>;
    conditions: Array<string>;
    private _db: Database;

    constructor() {
        this.tablename = 'users';
        this.fields = [
            'users.*',
            'emails.mail',
            'roles.role',
            'roles.level'
        ];
        this.joins = [
            {
                table: 'emails',
                condition: 'users.email_id = emails.id',
                type: 'left'
            },
            {
                table: 'roles',
                condition: 'users.role_id = roles.id',
                type: 'left'
            }
        ];

        this._db = new Database(this.tablename, this.fields, this.joins, this.conditions);
    }
}