export abstract class BaseEntity<ID> {
  private _id: ID;
  constructor(id: ID) {
    this._id = id;
  }
  get id(): ID {
    return this._id;
  }
  set id(id: ID) {
    this._id = id;
  }
}
