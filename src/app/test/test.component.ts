import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, OnDestroy {
  public addText: Boolean = false;
  public text: string = 'hello';
  public subscription: Subscription | undefined;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.subscription = this.apiService.addTextEvent.subscribe((data) => {
      this.addText = data;
    });
    this.subscription = this.apiService.changeTextEvent.subscribe((data) => {
      this.text = data;
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
