import {
  ConnectionPositionPair,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';

export const POSITION_MAP = {
  top: new ConnectionPositionPair(
    { originX: 'center', originY: 'top' },
    { overlayX: 'center', overlayY: 'bottom' },
    undefined,
    -4
  ),
  topLeft: new ConnectionPositionPair(
    { originX: 'start', originY: 'top' },
    { overlayX: 'start', overlayY: 'bottom' },
    undefined,
    -4
  ),
  topRight: new ConnectionPositionPair(
    { originX: 'end', originY: 'top' },
    { overlayX: 'end', overlayY: 'bottom' },
    undefined,
    -4
  ),
  right: new ConnectionPositionPair(
    { originX: 'end', originY: 'center' },
    { overlayX: 'start', overlayY: 'center' },
    4
  ),
  rightTop: new ConnectionPositionPair(
    { originX: 'end', originY: 'top' },
    { overlayX: 'start', overlayY: 'top' },
    4
  ),
  rightBottom: new ConnectionPositionPair(
    { originX: 'end', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'bottom' },
    4
  ),
  bottom: new ConnectionPositionPair(
    { originX: 'center', originY: 'bottom' },
    { overlayX: 'center', overlayY: 'top' },
    undefined,
    4
  ),
  bottomLeft: new ConnectionPositionPair(
    { originX: 'start', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'top' },
    undefined,
    4
  ),
  bottomRight: new ConnectionPositionPair(
    { originX: 'end', originY: 'bottom' },
    { overlayX: 'end', overlayY: 'top' },
    undefined,
    4
  ),
  left: new ConnectionPositionPair(
    { originX: 'start', originY: 'center' },
    { overlayX: 'end', overlayY: 'center' },
    -4
  ),
  leftTop: new ConnectionPositionPair(
    { originX: 'start', originY: 'top' },
    { overlayX: 'end', overlayY: 'top' },
    -4
  ),
  leftBottom: new ConnectionPositionPair(
    { originX: 'start', originY: 'bottom' },
    { overlayX: 'end', overlayY: 'bottom' },
    -4
  ),
};

export const DEFAULT_TOOLTIP_POSITIONS = [
  POSITION_MAP.bottom,
  POSITION_MAP.left,
  POSITION_MAP.top,
  POSITION_MAP.right,
];

export type POSITION_TYPE = keyof typeof POSITION_MAP;

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input(`appTooltip`) content: string | TemplateRef<any> = '';
  @Input()
  set placement(value: POSITION_TYPE | POSITION_TYPE[]) {
    this._placement = value;
    const preferredPosition = Array.isArray(value)
      ? value.map((placement) => POSITION_MAP[placement])
      : [POSITION_MAP[value]];

    this._positions = [...preferredPosition, ...DEFAULT_TOOLTIP_POSITIONS];
  }
  get placement() {
    return this._placement;
  }
  private _placement!: POSITION_TYPE | POSITION_TYPE[];

  private _overlayRef!: OverlayRef;
  private _positions: ConnectionPositionPair[] = [...DEFAULT_TOOLTIP_POSITIONS];

  constructor(
    private _overlay: Overlay,
    private _overlayPositionBuilder: OverlayPositionBuilder,
    private _elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('mouseenter')
  show() {
    if (!this._overlayRef) {
      const positionStrategy = this._overlayPositionBuilder
        .flexibleConnectedTo(this._elementRef)
        .withPositions(this._positions);

      this._overlayRef = this._overlay.create({ positionStrategy });
    }

    if (this._overlayRef && !this._overlayRef.hasAttached()) {
      if (typeof this.content === 'string') {
        const tooltipRef: ComponentRef<TooltipComponent> =
          this._overlayRef.attach(new ComponentPortal(TooltipComponent));
        tooltipRef.instance.text = this.content;
      } else {
        this._overlayRef.attach(
          new TemplatePortal(this.content, this._viewContainerRef)
        );
      }
    }
  }

  @HostListener('mouseleave')
  hide() {
    this.closeToolTip();
  }

  @HostListener('window:resize')
  public onResize(): void {
    this._overlayRef.updatePosition();
  }

  ngOnDestroy() {
    this.closeToolTip();
  }

  private closeToolTip() {
    if (this._overlayRef) {
      this._overlayRef.detach();
      this._overlayRef.updatePosition();
    }
  }
}
