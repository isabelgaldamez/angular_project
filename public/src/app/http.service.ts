import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient ) { }

  createNew(inputData){
    console.log('service -> ',inputData );
    return this._http.post('/newRecord', inputData);
  }

  findAll(){
    console.log('find all records');
    return this._http.get('/getAll');
  }

  getOneById(id){
    console.log('find by id:', id);
    return this._http.get(`/getById/${id}`);
  }

  updateRecord(id, updateInfo){
    console.log('update record -> ', id);
    return this._http.put(`/updateRecord/${id}`, updateInfo);
  }

  deleteRecord(id){
    console.log('delete this record' + id);
    return this._http.delete(`/delete/${id}`);
  }
}
