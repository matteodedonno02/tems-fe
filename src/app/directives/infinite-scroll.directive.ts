import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true
})
export class InfiniteScrollDirective {

  @Output() atBottom = new EventEmitter<void>();

  constructor(private el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    const tracker = event.target;
    const limit = tracker.scrollHeight - tracker.clientHeight;
    if (tracker.scrollTop === limit) {
      this.atBottom.emit();
    }
  }
}
