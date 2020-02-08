import BaseEntity from '../base/Entity.base';

export default class UserEntity extends BaseEntity {
    Id: number | string;
    FirstName: string;
    LastName: string;
    UserName: string;
    Password: string;
    Image: string;
}