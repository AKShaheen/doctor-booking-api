import { IEventPublisher } from "./IEventPublisher";
import { IEventSubscriber } from "./IEventSubscriber";

type Handler<T> = (payload: T) => void;

export class EventBus implements IEventPublisher, IEventSubscriber {
  private handlers: Map<string, Handler<any>[]> = new Map();

  publish<T>(eventType: string, payload: T): void {
    const handlers = this.handlers.get(eventType) || [];
    handlers.forEach((handler) => handler(payload));
  }

  subscribe<T>(eventType: string, handler: (payload: T) => void): void {
    const existingHandlers = this.handlers.get(eventType) || [];
    this.handlers.set(eventType, [...existingHandlers, handler]);
  }
}
