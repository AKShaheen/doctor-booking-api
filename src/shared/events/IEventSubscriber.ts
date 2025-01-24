export interface IEventSubscriber {
  subscribe<T>(eventType: string, handler: (payload: T) => void): void;
}
