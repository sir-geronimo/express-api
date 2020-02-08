import IEntity from './../interfaces/IEntity.interface';

export default abstract class BaseEntity implements IEntity {
    CreatedDate: Date = new Date();
    CreatedBy: string | number;
    UpdatedDate: Date;
    UpdatedBy: string | number;
}