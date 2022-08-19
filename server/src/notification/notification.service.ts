import { Injectable } from '@nestjs/common';
import { fromEvent, Subject } from "rxjs";
import * as EventEmitter from "events";

@Injectable()
export class NotificationService {

  private readonly emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
  }

  subscribe() {
    return fromEvent(this.emitter, 'eventName');
  }

  async emit(data) {
    this.emitter.emit('eventName', { data });
  }
}
