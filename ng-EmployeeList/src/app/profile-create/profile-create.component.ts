import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {

  employees: any;
  employeeCounter = -1;

  createForm = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    company: new FormControl(''),
    motto: new FormControl(''),
    hometown: new FormControl(''),
    blog: new FormControl('')
  });

  constructor(private http: HttpClient,
    private route: ActivatedRoute, private fb: FormBuilder) {

  }

  @Input()
  showCreate: boolean = true;
  showProfile: boolean = false;

  ngOnInit(): void {

    this.http.get('/api/employee')
      .subscribe(Response => {
        console.log(Response)
        this.employees = Response;
      })

    this.route.paramMap.subscribe(params => {
      this.employeeCounter = Number(this.route.snapshot.paramMap.get('employees.id'));
      if (this.employeeCounter > 0) {
        --this.employeeCounter;
      }
      console.log(this.employeeCounter);
    });


  }

  onSubmit(): void{
    console.log(this.createForm);
    // this.http.post('/api/employee')
  }
}
