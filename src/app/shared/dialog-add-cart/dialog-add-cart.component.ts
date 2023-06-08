import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dialog-add-cart',
  templateUrl: './dialog-add-cart.component.html',
  styleUrls: ['./dialog-add-cart.component.scss'],
})
export class DialogAddCartComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { product: any; totalQuantity$: BehaviorSubject<number>, totalPrice$:BehaviorSubject<number> }
  ) {}

  ngOnInit() {
    //console.log(this.product);
  }
}
