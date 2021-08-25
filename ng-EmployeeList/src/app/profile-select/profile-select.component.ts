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
  yeah = -1;

  showOutlet: boolean = false;

  onActivate(event : any) {
  this.showOutlet = true;
  }

  onDeactivate(event : any) {
  this.showOutlet = false;
  }

  @Input()
  showProfile: boolean = true;

  ngOnInit(): void {

    this.http.get('/api/employee')
    .subscribe(Response => {
      console.log(Response);
      this.employees = Response;
    })

    this.route.paramMap.subscribe(params => {
      this.yeah = Number(this.route.snapshot.paramMap.get('employees.id'));
      if(this.yeah > 0){
        --this.yeah;
      }
      console.log(this.yeah);
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
