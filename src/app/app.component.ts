import { Component } from '@angular/core';
import { DataService } from './data.service';
// import { HttpClient } from '@angular/common/http';
// import {HttpClientModule} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student:string;
  students:any;
  
  constructor(private _dataService:DataService){
    this._dataService.getStudents().subscribe(response => {
      this.students = response ? response['data'] : '';
    });
  }

  addStudent(){
    let req = {"name" : this.student};
    this._dataService.addStudent(req).subscribe(response => {
      this.students = response ? response['data'] : '';
    });
  }
}
