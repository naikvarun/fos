export abstract class BaseEntity<ID> {
    private _id?: ID;

    get id(): ID| undefined {
        return this._id;
    }
    set id(id: ID) {
        this._id = id;
    }
}