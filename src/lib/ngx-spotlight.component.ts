import {CommonModule, isPlatformBrowser} from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  signal,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'om-spotlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-spotlight.component.html",
  styleUrl: "./ngx-spotlight.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  spotlightInViewport = signal(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        this.renderContents(entry.isIntersecting)
      })
      this.intersectionObserver.observe(this.elementRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  renderContents(isIntersecting: boolean) {
    if (isIntersecting && !this.spotlightInViewport()) {
      this.spotlightInViewport.set(true);
    } else if (!isIntersecting) {
      this.spotlightInViewport.set(false);
    }
  }
}
