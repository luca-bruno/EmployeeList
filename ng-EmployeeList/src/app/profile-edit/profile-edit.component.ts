import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  employees: any;
  yeah = -1;

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.http.get('/api/employee')
      .subscribe(Response => {
        console.log(Response)
        this.employees = Response;
      })

    this.route.paramMap.subscribe(params => {
      this.yeah = Number(this.route.snapshot.paramMap.get('employees.id'));
      if (this.yeah > 0) {
        --this.yeah;
      }
      console.log(this.yeah);
    });
  }
}
