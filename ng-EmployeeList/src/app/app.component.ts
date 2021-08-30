import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: any;

  profileDisplayer: boolean = false;
  createMenuDisplayer: boolean = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    this.http.get('/api/employee')  // fetch employee list from API
      .subscribe(Response => {
        console.log(Response)
        this.employees = Response;
      })
  }

    displayProfile() {  // toggle bool to display profile select page
      this.profileDisplayer = true;
      this.createMenuDisplayer = false;
    }

    displayCreate() { // toggle bool to display create employee page
      this.createMenuDisplayer = true;
      this.profileDisplayer = false;
    }

  deleteEmployee(employeeID: number) {
    fetch('/api/employee/' + employeeID, { method: 'DELETE' })
      .then(data => window.location.reload()) // refresh app post-Delete
  }

}



