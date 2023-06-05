import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 3000;
  public text!: string;
  public type = 'success';
  aSub!: Subscription;
  timeoutId!: any
  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.aSub = this.alertService.alert$.subscribe((alert) => {
      this.text = alert.text;
      this.type = alert.type;
      clearTimeout(this.timeoutId); // clear the previous timeout before setting a new one
      this.timeoutId = setTimeout(() => {
        this.text = '';
      }, this.delay);
    });

  }

  closeAlert() {
    this.text = '';
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
