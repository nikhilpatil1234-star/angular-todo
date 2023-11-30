import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {}
  ChangeText() {
    this.apiService.addTextMethod();
  }
  changeHello() {
    this.apiService.changeTextMethod();
  }
}
