import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscriber } from 'rxjs';

export enum AppEvent {
  OnElementDeleted
}

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  private subjects: Map<AppEvent, BehaviorSubject<any>>

  constructor() {
    this.subjects = new Map<AppEvent, BehaviorSubject<any>>()
  }

  private createIfNotExists<T = any>(event: AppEvent) {
    if (!this.subjects.has(event)) {
      this.subjects.set(event, new BehaviorSubject<T>(null))
    }
  }

  send<T>(event: AppEvent, value: T) {
    this.createIfNotExists<T>(event)

    this.subjects.get(event).next(value)
  }

  subscribe<T>(event, action: (value: T) => void) {
    this.createIfNotExists<T>(event)

    return this.subjects.get(event).subscribe({
      next: (value) => {
        if (value) {
          action(value)
        }
      }
    })
  }
}
