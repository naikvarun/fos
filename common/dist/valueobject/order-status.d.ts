declare const ORDER_STATUS: {
    readonly PENDING: "pending";
    readonly PAID: "paid";
    readonly APPROVED: "approved";
    readonly CANCELLED: "cancelled";
    readonly CANCELLING: "cancelling";
};
type EnumType<T> = T[keyof T];
export type OrderStatus = EnumType<typeof ORDER_STATUS>;
export {};
