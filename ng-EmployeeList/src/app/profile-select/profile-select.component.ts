import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.component.html',
  styleUrls: ['./profile-select.component.css']
})
export class ProfileSelectComponent implements OnInit {

  constructor() { }

  employees = Object();

  ngOnInit(): void {
    fetch('/api/employee')
    .then(response => response.json())
    .then(data => this.employees = data[0])
  }

}
