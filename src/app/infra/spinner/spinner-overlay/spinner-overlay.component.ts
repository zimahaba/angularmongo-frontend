import { Component, OnInit, Input } from '@angular/core';
import { SpinnerOverlayService } from '../spinner-overlay.service';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss'],
})
export class SpinnerOverlayComponent implements OnInit {
  @Input() public message: string;

  constructor() {}

  ngOnInit(): void {}

  isOn() {
    return true;
  }
}
