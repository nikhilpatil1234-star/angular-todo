import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { dataModel } from './model';
import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, count, interval, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  searchTxt: string = '';
  empData: any;
  employeeForm!: FormGroup;
  errorMsg: string = '';
  private subscription: Subscription | undefined;
  private intervalSub: Subscription | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public toastService: ToastrService
  ) {}
  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.getAllData();
  }
  AddEmployee(data: any) {
    this.apiService.AddEmployee(data).subscribe(
      (resp) => {
        console.log('resp', resp);
        this.employeeForm.reset();
        this.getAllData();
        this.toastService.success('successfully Added', 'added');
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getAllData() {
    this.subscription = this.apiService.getAllEmployee().subscribe(
      // {
      //   next: (resp: dataModel) => {
      //     console.log('resp', resp);
      //     this.empData = resp;
      //   },
      //   error: (err) => {
      //     this.errorMsg = err.message;
      //     console.log('err', err.message);
      //   },
      //   complete: () => {
      //     console.log('completed');
      //   },
      // }
      (resp: dataModel) => {
        this.empData = resp;
      },
      (error) => {
        // alert(error.message);
        this.errorMsg = error.message;
      }
    );

    // this.intervalSub = interval(1000).subscribe((count) =>
    //   console.log('count', count)
    // );

    // this.apiService.getAllEmployee().subscribe((res) => {
    //   if (200) {
    //     console.log('20000');
    //   } else {
    //   }
    // });
    // const obs$ = ajax('http://localhost:3000/posts').pipe(
    //   map((userResponse) => console.log('users: ', userResponse)),
    //   catchError((error) => {
    //     console.log('error: ', error);
    //     return of(error);
    //   })
    // );
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('unsubscribed');
    }
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
      console.log('unsubscribed for count');
    }
  }

  DeleteEmp(id: number) {
    this.apiService.deleteEmployee(id).subscribe((resp) => {
      this.getAllData();
      this.toastService.error('deleted', 'deleted');
    });
  }
}
