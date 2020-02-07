export default interface IDatabase {
    get(id?: number | string): any;
    create(data: any): any;
    update(id: number | string, data?: object): any;
    delete(id: number | string): any;
}