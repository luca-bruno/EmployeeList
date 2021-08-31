import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {

  employees: any;
  createURL: any;

  @Input()
  showCreate: boolean = true;
  showProfile: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {

  }

  createForm = new FormGroup({
    employeeName: new FormControl(''),
    employeeJobPosition: new FormControl(''),
    employeeCompany: new FormControl(''),
    employeeMotto: new FormControl(''),
    employeeHobbies: new FormControl(''),
    employeeHometown: new FormControl(''),
    employeeBlog: new FormControl(''),
    employeePic: new FormControl(''),
    isActive: new FormControl('')
  });

  ngOnInit(): void {

    this.http.get('/api/employee')  // fetch employee list from API
      .subscribe(Response => {
        console.log(Response)
        this.employees = Response;
      })

  }

  onSubmit(): void { // on form submit
    const body = {  // values inputted from form post-submission
      employeeName: this.createForm.value.employeeName,
      employeeJobPosition: this.createForm.value.employeeJobPosition,
      employeeCompany: this.createForm.value.employeeCompany,
      employeeMotto: this.createForm.value.employeeMotto,
      employeeHobbies: this.createForm.value.employeeHobbies,
      employeeHometown: this.createForm.value.employeeHometown,
      employeeBlog: 'https://' + this.createForm.value.employeeBlog,
      employeePic: 'https://i0.wp.com/prikachi.com/wp-content/uploads/2020/07/DPP1.jpg', // default avatar
      isActive: true
    };

    this.http.post<any>('/api/employee/', body) // POST request to API
        .subscribe(data => {
        console.log(this.createForm);
        console.log(data);
        // window.location.reload(); // refresh page post-POST request
  })
  }

  // Method below does not work - intended to allow file image upload and preview in place of img #avatar
  onFileSelected(event: any){
    console.log(event.target.files[0]);
    if(event.target.files){
      console.log("helllo");
      var reader = new FileReader();
      // reader.readAsDataURL(event.target.files[0]);
      console.log(reader.readAsDataURL(event.target.files[0]));
      document.getElementById('avatar')!.setAttribute('src', window.URL.createObjectURL(event.files[0]))
    }
  }
}
