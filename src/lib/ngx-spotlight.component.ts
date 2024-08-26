import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'om-spotlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-spotlight.component.html",
  styleUrl: "./ngx-spotlight.component.scss",
})
export class NgxSpotlightComponent implements AfterViewInit, OnDestroy {
  @ViewChild('OmSpotlight') elementRef!: ElementRef<HTMLElement>;

  @Input('styleClass')
  styleClass?: string;

  @Input('animation')
  animation = false;

  @Input('spotlightColor')
  set spotlightColor(color: string) {
    this.style['--om-spotlight-color'] = color;
  }

  style: any = {};

  private intersectionObserver?: IntersectionObserver;

  spotlightInViewport = false;

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.renderContents(entry.isIntersecting)
    })
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  renderContents(isIntersecting: boolean) {
    if (isIntersecting && !this.spotlightInViewport) {
      this.spotlightInViewport = true;
    } else if (!isIntersecting) {
      this.spotlightInViewport = false;
    }
  }
}
