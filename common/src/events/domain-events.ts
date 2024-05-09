export type DomainEventsWithoutData<EventType> = {
  createdAt: Date;
  type: EventType;
};
export type DomainEventWithData<EventType, Data> = DomainEventsWithoutData<EventType> & {
  data: Data;
};

export type DomainEvent<EventType, Data = void> = Data extends void
  ? DomainEventsWithoutData<EventType>
  : DomainEventWithData<EventType, Data>;
