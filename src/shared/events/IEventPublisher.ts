export interface IEventPublisher {
  publish<T>(eventType: string, payload: T): void;
}
