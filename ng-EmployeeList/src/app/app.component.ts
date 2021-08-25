import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: any;

  profileDisplayer: boolean = false;

  displayProfile(){
        this.profileDisplayer = true;
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    this.http.get('/api/employee')
      .subscribe(Response => {
        console.log(Response)
        this.employees = Response;
      })
  }


  // handleClick(event : any) {

  //   console.log(event);
  //   let employee = this.employees.filter((x : any) => x.employeeId == event.target.id);

  //   //set data for single employee details

  // }

}



