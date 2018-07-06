import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DataService {
  constructor(private _http:HttpClient) {}

  getStudents(){
    return this._http.get('/students');
  }

  addStudent(req){
    return this._http.post('/addstudent',req);
  }

}
