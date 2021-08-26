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

  displayProfile(){
        this.profileDisplayer = true;
  }

  displayCreate(){
        this.createMenuDisplayer = true;
        console.log("CREATE MENU:" + this.createMenuDisplayer);
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

  deleteEmployee(employeeID:number){

    console.log('HEREEE'+employeeID)

    fetch('/api/employee/' + employeeID,{method:'DELETE'}).then(data => window.location.reload())

   // this.http.delete('http://localhost:5001/api/employee/' + employeeID)
    //.subscribe(Response => {
     // console.log(Response)
    //})
  }

  // handleClick(event : any) {

  //   console.log(event);
  //   let employee = this.employees.filter((x : any) => x.employeeId == event.target.id);

  //   //set data for single employee details

  // }

}



