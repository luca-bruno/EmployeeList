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

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {

  }

  employees : any;
  data = "";
  employeeCounter = -1;

  @Input()
  showProfile: boolean = true;
  showCreate: boolean = false;

  ngOnInit(): void {

    this.http.get('/api/employee')
    .subscribe(Response => {
      console.log(Response);
      this.employees = Response;
    })

    this.route.paramMap.subscribe(params => {
      this.employeeCounter = Number(this.route.snapshot.paramMap.get('employees.id'));
      if(this.employeeCounter > 0){
        --this.employeeCounter;
      }
      console.log(this.employeeCounter);
    });
  }

    // console.log(this.route.snapshot.params); //retrieves section of current URL path MIGHT NOT BE NEEDED
    // this.data = this.route.snapshot.params.employeeID;

    // var hello = JSON.parse(this.route.snapshot.params.employeeID.employeeID);
    // console.log("hello:" + hello);
    // take data of URL, minus 1 into new var, use new var in element on HTML



  // handleClick(event : any) {

  //   console.log(event);
  //   let employee = this.employees.filter((x : any) => x.employeeId == event.target.id);

  //   //set data for single employee details

  // }



}
