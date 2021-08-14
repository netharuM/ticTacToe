import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton hero status="basic" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'O'">{{value}}</button>
    <button nbButton hero status="info" *ngIf="value == 'X'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | undefined;

}
