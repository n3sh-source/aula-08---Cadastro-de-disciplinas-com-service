import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  intervalo: number;
  constructor(public timer: TimerService) {
    this.timer.start(this.intervalo);
  }

  defIntervalo() {
    this.timer.start(this.intervalo);
  }

  ngOnInit() {}
}
