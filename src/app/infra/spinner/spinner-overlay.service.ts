import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerOverlayService {
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) {}

  on: boolean = false;

  public isOn() {
    return this.on;
  }

  public show(message = '') {
    // Returns an OverlayRef (which is a PortalHost)

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerOverlayPortal = new ComponentPortal(SpinnerOverlayComponent);
    const component = this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost

    this.on = true;
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
      this.on = false;
    }
    this.on = false;
  }
}
