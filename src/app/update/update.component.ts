import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  empIdData: any;
  dataId: any;
  employeeForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private toast: ToastrService
  ) {}
  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.activatedRoute.paramMap.subscribe((params) => {
      this.dataId = params['get']('id');
      this.apiService.FetchEmployeeId(this.dataId).subscribe((x) => {
        this.empIdData = x;
        console.log('x', x);
        console.log(' params', params.get('id'));
      });
    });
  }
  updateEmpData() {
    // console.log('dataId', this.dataId);
    // console.log('this.employeeForm', this.employeeForm.value);
    this.apiService
      .updateEmploye(this.dataId, this.employeeForm.value)
      .subscribe((resp) => {
        console.log('resp', resp);
      });
    this.toast.success('changes updated');
    this.router.navigate(['/list']);
  }
}
