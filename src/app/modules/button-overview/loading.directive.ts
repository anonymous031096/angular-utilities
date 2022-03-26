import { ComponentRef, Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements OnChanges {
  @Input() appLoading: boolean | undefined;
  @Input() @HostBinding('disabled') disabled: boolean | string | undefined;
  private appLoadingDisabled = false;

  private matProgressSpinnerRef: ComponentRef<MatProgressSpinner> | undefined;

  constructor(private viewContainerRef: ViewContainerRef, private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
      this.appLoadingDisabled = changes['disabled']?.currentValue === '' || changes['disabled'].currentValue;
    }

    this.handleButtonLoading();
  }

  private handleButtonLoading() {
    if (this.appLoadingDisabled) return;
    if (this.appLoading) {
      this.disabled = true;
      this.createMatProgressSpinner();
      this.renderer2.addClass(this.elementRef.nativeElement, 'mat-button-disabled');
    } else {
      this.disabled = false;
      if (!this.matProgressSpinnerRef) return;
      this.matProgressSpinnerRef.destroy();
      this.renderer2.removeClass(this.elementRef.nativeElement, 'mat-button-disabled');
    }
  }

  private createMatProgressSpinner() {
    this.matProgressSpinnerRef = this.viewContainerRef.createComponent(MatProgressSpinner);
    this.matProgressSpinnerRef.instance.color = 'primary';
    this.matProgressSpinnerRef.instance.mode = 'indeterminate';
    this.matProgressSpinnerRef.instance.diameter = 24;

    this.renderer2.setStyle(this.matProgressSpinnerRef.location.nativeElement, 'position', 'absolute');
    this.renderer2.setStyle(this.matProgressSpinnerRef.location.nativeElement, 'left', 'calc(50% - 12px)');
    this.renderer2.setStyle(this.matProgressSpinnerRef.location.nativeElement, 'top', 'calc(50% - 12px)');

    this.renderer2.insertBefore(this.elementRef.nativeElement, this.matProgressSpinnerRef.location.nativeElement, this.elementRef.nativeElement.firstChild);
  }
}
