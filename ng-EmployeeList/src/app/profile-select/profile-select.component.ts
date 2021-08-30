import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.component.html',
  styleUrls: ['./profile-select.component.css']
})
export class ProfileSelectComponent implements OnInit {

  employees: any;
  data = "";
  employeeCounter = 0;

  @Input()
  showProfile: boolean = true;
  showCreate: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.http.get('/api/employee')  // fetch employee list from API
    .subscribe(Response => {
      console.log(Response);
      this.employees = Response;

      this.route.paramMap.subscribe(params => {
        let idInUrl = Number(this.route.snapshot.paramMap.get('employees.id'));  // get ID query parameter value from URL as integer
        this.employeeCounter = (this.employees.findIndex((obj: any) => obj.employeeID === idInUrl)); // parameter values compared to match array element var (employeeCounter)

        console.log("Employee counter: " + this.employeeCounter);
      });
    })
  }

  deleteEmployee(employeeID: number) {
    fetch('/api/employee/' + employeeID, { method: 'DELETE' })
      .then(data => window.location.reload()) // reload app post-Delete
  }
}
