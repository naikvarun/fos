export declare abstract class BaseEntity<ID> {
    private _id?;
    get id(): ID | undefined;
    set id(id: ID);
}
