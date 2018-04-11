import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  date;

  constructor() {
    this.date = new Date().toLocaleString('ru-RU');
  }

}
