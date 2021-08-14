import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value" class="block">{{ value }}</button>
    <button nbButton outline status="success" *ngIf="value == 'O'">{{value}}</button>
    <button nbButton outline status="info" *ngIf="value == 'X'">{{ value }}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | undefined;

}
