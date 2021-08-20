import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-EmployeeList';
}

$(document).ready(function(){
  $(".employee-preview").mouseover(function(){
      $(this).find(".employee-preview-position").css("color", "white");
  });
});

$(document).ready(function(){
  $(".employee-preview").mouseover(function(){
    $(this).find(".delete-btn").css("color", "white");
  });
});

$(document).ready(function(){
  $(".employee-preview").mouseout(function(){
    $(this).find(".employee-preview-position").css("color", "#999999");
  });
});

$(document).ready(function(){
  $(".employee-preview").mouseout(function(){
    $(this).find(".delete-btn").css("color", "#999999");
  });
});