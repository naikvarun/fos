export declare abstract class BaseId<ID> {
    private _value;
    protected constructor(value: ID);
    get value(): ID;
}
