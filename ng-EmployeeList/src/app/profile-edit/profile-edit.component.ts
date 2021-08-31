import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  employees: any;
  employeeCounter = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  editForm = new FormGroup({
    employeeName: new FormControl(''),
    employeeJobPosition: new FormControl(''),
    employeeCompany: new FormControl(''),
    employeeMotto: new FormControl(''),
    employeeHobbies: new FormControl(''),
    employeeHometown: new FormControl(''),
    employeeBlog: new FormControl(''),
    employeePic: new FormControl('')
  });

  ngOnInit(): void {

    this.http.get('/api/employee')  // fetch employee list from API
      .subscribe(Response => {
        console.log(Response)
        this.employees = Response;

        this.route.paramMap.subscribe(params => {
          let idInUrl = Number(this.route.snapshot.paramMap.get('employees.id')); // get ID query parameter value from URL as integer
          this.employeeCounter = this.employees.findIndex((obj: any) => obj.employeeID === idInUrl); // parameter values compared to match array element var (employeeCounter)

          console.log("Employee counter: " + this.employeeCounter);
        });

        this.editForm.patchValue({
          employeeName: this.employees[this.employeeCounter].employeeName,
          employeeJobPosition: this.employees[this.employeeCounter].employeeJobPosition,
          employeeCompany: this.employees[this.employeeCounter].employeeCompany,
          employeeMotto: this.employees[this.employeeCounter].employeeMotto,
          employeeHobbies: this.employees[this.employeeCounter].employeeHobbies,
          employeeHometown: this.employees[this.employeeCounter].employeeHometown,
          employeeBlog: this.employees[this.employeeCounter].employeeBlog,
          employeePic: ''
      });

    })
  }

  onSubmit(employeeID: number) { // on form submit
    console.log("EmployeeID: " + employeeID);

    const body = {  // values inputted from form post-submission
      employeeID: employeeID,
      employeeName: this.editForm.value.employeeName,
      employeeJobPosition: this.editForm.value.employeeJobPosition,
      employeeCompany: this.editForm.value.employeeCompany,
      employeeMotto: this.editForm.value.employeeMotto,
      employeeHobbies: this.editForm.value.employeeHobbies,
      employeeHometown: this.editForm.value.employeeHometown,
      employeeBlog: this.editForm.value.employeeBlog,
      employeePic: this.editForm.value.employeePic
    };

    this.http.put<any>('/api/employee/' + employeeID, body) // PUT request to API
        .subscribe(data => { employeeID == data.employeeID;
          console.log(data);
          // window.location.reload(); // refresh page post-PUT request
        })

        console.log(this.editForm);
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

  deleteEmployee(employeeID: number) {
    fetch('/api/employee/' + employeeID, { method: 'DELETE' })
      .then(data => window.location.reload())
  }
}

