export type DomainEventsWithoutData = {
  createdAt: Date;
};
export type DomainEventWithData<Data> = DomainEventsWithoutData & {
  data: Data;
};

export type DomainEvent<Data = void> = Data extends void ? DomainEventsWithoutData : DomainEventWithData<Data>;
